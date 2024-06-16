import pkg from 'pg';
import bcrypt from 'bcrypt';

const { Pool } = pkg; // conjunto de conexiones

// configuraciones
export const pool = new Pool({
  connectionString: 'postgres://root:YT0ZoNGfRB2dptn5QKUlCFMXRYbYkzqg@dpg-cp0kkcvjbltc73dv8uhg-a.oregon-postgres.render.com/sherlock',
  ssl: true
});

export const getHouses = async (req, res) => {
  try {
    const { page = 1, limit = 10, city, sqft, bathrooms, bedrooms, price, property_type, q } = req.query;
    const offset = (page - 1) * limit;

    let queryText = 'SELECT * FROM house WHERE 1=1';
    let countQuery = 'SELECT COUNT(*) FROM house WHERE 1=1';
    let avgPriceQuery = 'SELECT AVG(price) FROM house WHERE 1=1';
    const totalQuery = 'SELECT COUNT(*) FROM house';
    const queryParams = [];
    const countParams = [];
    const avgPriceParams = [];

    const removeAccents = (str) => {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    if (q && q !== 'undefined') {
      const normalizedQuery = removeAccents(q);
      queryParams.push(`%${normalizedQuery}%`, `%${normalizedQuery}%`);
      countParams.push(`%${normalizedQuery}%`, `%${normalizedQuery}%`);
      avgPriceParams.push(`%${normalizedQuery}%`, `%${normalizedQuery}%`);
      queryText += ` AND (unaccent(title) ILIKE unaccent($${queryParams.length - 1}) OR unaccent(description) ILIKE unaccent($${queryParams.length}))`;
      countQuery += ` AND (unaccent(title) ILIKE unaccent($${countParams.length - 1}) OR unaccent(description) ILIKE unaccent($${countParams.length}))`;
      avgPriceQuery += ` AND (unaccent(title) ILIKE unaccent($${avgPriceParams.length - 1}) OR unaccent(description) ILIKE unaccent($${avgPriceParams.length}))`;
    }

    if (city && city !== 'undefined') {
      const normalizedCity = removeAccents(city);
      queryParams.push(`%${normalizedCity}%`);
      countParams.push(`%${normalizedCity}%`);
      avgPriceParams.push(`%${normalizedCity}%`);
      queryText += ` AND unaccent(city) ILIKE unaccent($${queryParams.length})`;
      countQuery += ` AND unaccent(city) ILIKE unaccent($${countParams.length})`;
      avgPriceQuery += ` AND unaccent(city) ILIKE unaccent($${avgPriceParams.length})`;
    }

    if (sqft && sqft !== 'undefined' && sqft !== '0-3000') {
      const [minSqft, maxSqft] = sqft.split('-').map(Number);
      if (!isNaN(minSqft) && !isNaN(maxSqft)) {
        queryParams.push(minSqft, maxSqft);
        countParams.push(minSqft, maxSqft);
        avgPriceParams.push(minSqft, maxSqft);
        queryText += ` AND sqft BETWEEN $${queryParams.length - 1} AND $${queryParams.length}`;
        countQuery += ` AND sqft BETWEEN $${countParams.length - 1} AND $${countParams.length}`;
        avgPriceQuery += ` AND sqft BETWEEN $${avgPriceParams.length - 1} AND $${avgPriceParams.length}`;
      }
    }

    if (bathrooms && bathrooms !== 'undefined') {
      const numBathrooms = bathrooms === '+4' ? 4 : Number(bathrooms);
      if (!isNaN(numBathrooms)) {
        queryParams.push(numBathrooms);
        countParams.push(numBathrooms);
        avgPriceParams.push(numBathrooms);
        if (bathrooms === '+4') {
          queryText += ` AND bathrooms >= $${queryParams.length}`;
          countQuery += ` AND bathrooms >= $${countParams.length}`;
          avgPriceQuery += ` AND bathrooms >= $${avgPriceParams.length}`;
        } else {
          queryText += ` AND bathrooms = $${queryParams.length}`;
          countQuery += ` AND bathrooms = $${countParams.length}`;
          avgPriceQuery += ` AND bathrooms = $${avgPriceParams.length}`;
        }
      }
    }

    if (bedrooms && bedrooms !== 'undefined') {
      const numBedrooms = bedrooms === '+4' ? 4 : Number(bedrooms);
      if (!isNaN(numBedrooms)) {
        queryParams.push(numBedrooms);
        countParams.push(numBedrooms);
        avgPriceParams.push(numBedrooms);
        if (bedrooms === '+4') {
          queryText += ` AND bedrooms >= $${queryParams.length}`;
          countQuery += ` AND bedrooms >= $${countParams.length}`;
          avgPriceQuery += ` AND bedrooms >= $${avgPriceParams.length}`;
        } else {
          queryText += ` AND bedrooms = $${queryParams.length}`;
          countQuery += ` AND bedrooms = $${countParams.length}`;
          avgPriceQuery += ` AND bedrooms = $${avgPriceParams.length}`;
        }
      }
    }

    if (price && price !== 'undefined') {
      const [minPrice, maxPrice] = price.split('-').map(Number);
      if (!isNaN(minPrice) && !isNaN(maxPrice)) {
        queryParams.push(minPrice, maxPrice);
        countParams.push(minPrice, maxPrice);
        avgPriceParams.push(minPrice, maxPrice);
        queryText += ` AND price BETWEEN $${queryParams.length - 1} AND $${queryParams.length}`;
        countQuery += ` AND price BETWEEN $${countParams.length - 1} AND $${countParams.length}`;
        avgPriceQuery += ` AND price BETWEEN $${avgPriceParams.length - 1} AND $${avgPriceParams.length}`;
      }
    }

    if (property_type && property_type !== 'undefined') {
      queryParams.push(property_type);
      countParams.push(property_type);
      avgPriceParams.push(property_type);
      queryText += ` AND property_type = $${queryParams.length}`;
      countQuery += ` AND property_type = $${countParams.length}`;
      avgPriceQuery += ` AND property_type = $${avgPriceParams.length}`;
    }

    queryParams.push(limit, offset);
    queryText += ` LIMIT $${queryParams.length - 1} OFFSET $${queryParams.length}`;

    const [dataResponse, countResponse, avgPriceResponse, totalResponse] = await Promise.all([
      pool.query(queryText, queryParams),
      pool.query(countQuery, countParams),
      pool.query(avgPriceQuery, avgPriceParams),
      pool.query(totalQuery),
    ]);

    const data = dataResponse.rows;
    const totalCount = parseInt(countResponse.rows[0].count);
    const totalHouses = parseInt(totalResponse.rows[0].count);
    const avgPrice = parseFloat(avgPriceResponse.rows[0].avg) || 0;
    const percentage = (totalCount / totalHouses) * 100;

    const responseObject = {
      data,
      meta: {
        totalCount,
        totalHouses,
        page: parseInt(page),
        limit: parseInt(limit),
        percentage: percentage.toFixed(2),
        avgPrice: avgPrice.toFixed(2),
      },
    };

    res.json(responseObject);
  } catch (error) {
    console.error('Error fetching houses:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getAveragePricesByCity = async (req, res) => {
  try {
    const cities = ['viña', 'quilpue', 'valparaiso', 'villa alemana'];

    const avgPriceQueries = cities.map(city => ({
      text: 'SELECT AVG(price) AS avg_price FROM house WHERE LOWER(city) = $1',
      values: [city.toLowerCase()],
    }));

    const avgPricesPromises = avgPriceQueries.map(query => pool.query(query));
    const avgPricesResponses = await Promise.all(avgPricesPromises);

    const avgPrices = avgPricesResponses.reduce((acc, response, index) => {
      const city = cities[index];
      const avgPrice = parseFloat(response.rows[0].avg_price) || 0;
      acc[city] = avgPrice.toFixed(2);
      return acc;
    }, {});

    res.json(avgPrices);
  } catch (error) {
    console.error('Error fetching average prices by city:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getCityCount = async (req, res) => {
  try {
    const cities = ['viña', 'quilpue', 'valparaiso', 'villa alemana'];

    const houseCountQueries = cities.map(city => ({
      text: 'SELECT COUNT(*) AS house_count FROM house WHERE LOWER(city) = $1',
      values: [city.toLowerCase()],
    }));

    const houseCountPromises = houseCountQueries.map(query => pool.query(query));
    const houseCountResponses = await Promise.all(houseCountPromises);

    const houseCounts = houseCountResponses.reduce((acc, response, index) => {
      const city = cities[index];
      const houseCount = parseInt(response.rows[0].house_count, 10) || 0;
      acc[city] = houseCount;
      return acc;
    }, {});

    res.json(houseCounts);
  } catch (error) {
    console.error('Error fetching house counts by city:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const getFeaturedHouses = async (req, res) => {
  try {
    const query = {
      text: 'SELECT * FROM house ORDER BY price DESC LIMIT 3',
    };

    const response = await pool.query(query);

    res.json(response.rows);
  } catch (error) {
    console.error('Error fetching featured houses:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getHouseById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM house WHERE id = $1', [id]);

    if (response.rows.length === 0) {
      return res.status(404).json({ message: 'House not found' });
    }

    res.json(response.rows[0]);
  } catch (error) {
    console.error('Error fetching house:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteHouse = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('DELETE FROM house WHERE id = $1', [id]);
  console.log(response);
};

export const updateHouse = async (req, res) => {
  // Implementation for updating a house
};

// users

export const getAllUsers = async (req, res) => {
  try {
    const query = 'SELECT * FROM "users"';
    
    const result = await pool.query(query);

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching all users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createUser = async (req, res) => {
  let {
    username,
    email,
    password,
    password2,
    termsAndConditions
  } = req.body;

  let errors = [];
  let success = [];

  if (!username || !email || !password || !password2 || !termsAndConditions) {
    errors.push({ message: "Porfavor introduzca todos los campos" });
  }

  if (password.length < 6) {
    errors.push({ message: "Contraseña deberia tener por lo menos 6 caracteres" });
  }

  if (password != password2) {
    errors.push({ message: "Contraseñas no coinciden" });
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    // Check if username or email already exists
    const userCheckQuery = {
      text: 'SELECT * FROM "users" WHERE username = $1 OR email = $2',
      values: [username, email]
    };
    const userCheckResult = await pool.query(userCheckQuery);

    if (userCheckResult.rows.length > 0) {
      errors.push({ message: "El nombre de usuario o correo ya existen" });
      return res.status(400).json({ errors });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const role = 'user';
    const insertUserQuery = {
      text: 'INSERT INTO "users" (username, email, password, role) VALUES ($1, $2, $3, $4)',
      values: [username, email, hashedPassword, role]
    };

    await pool.query(insertUserQuery);
    success.push({ message: "Usuario registrado correctamente" });

    res.status(201).json({ success });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//favorites
export const addFavorite = async (req, res) => {
  const { userId, propertyId } = req.body;

  try {
    const client = await pool.connect();

    // Check if the user has already marked the property as favorite
    const checkQuery = `
      SELECT * FROM favorites 
      WHERE user_id = $1 AND property_id = $2;
    `;
    const checkResult = await client.query(checkQuery, [userId, propertyId]);

    if (checkResult.rows.length > 0) {
      // If the user has already marked the property as favorite, do not insert again
      res.status(400).json({ message: 'Property already marked as favorite.' });
    } else {
      // Insert the new favorite into the table
      const insertQuery = `
        INSERT INTO favorites (user_id, property_id, added_at)
        VALUES ($1, $2, CURRENT_TIMESTAMP)
        RETURNING *;
      `;
      const insertResult = await client.query(insertQuery, [userId, propertyId]);

      res.status(201).json({ favorite: insertResult.rows[0] });
    }

    client.release();
  } catch (error) {
    console.error('Error adding favorite:', error);
    res.status(500).json({ message: 'Internal server error.' });
  }
}

export const getFavorites = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT *
       FROM favorites
       `
    );

    res.status(200).json({
      success: true,
      data: result.rows
    });
  } catch (error) {
    console.error('Error getting favorites:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while getting favorites'
    });
  }
};

export const deleteFavorite = async (req, res) => {
  const { userId, propertyId } = req.body; // Use userId and propertyId

  try {
    if (!userId || !propertyId) {
      return res.status(400).json({
        success: false,
        message: 'User ID and Property ID are required'
      });
    }

    const result = await pool.query(
      `DELETE FROM favorites WHERE user_id = $1 AND property_id = $2 RETURNING *`,
      [userId, propertyId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        success: false,
        message: 'Favorite not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Favorite deleted successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Error deleting favorite:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while deleting the favorite'
    });
  }
};

export const getFavoritesByUserId = async (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({ success: false, message: 'User ID is required' });
  }

  try {
    const query = {
      text: `
        SELECT 
          favorites.favorite_id, 
          favorites.user_id, 
          favorites.property_id, 
          house.title, 
          house.price, 
          house.uf, 
          house.property_type, 
          house.bedrooms, 
          house.bathrooms, 
          house.sqft, 
          house.address, 
          house.description, 
          house.region, 
          house.city, 
          house.listing_url, 
          house.transaction, 
          house.latitude, 
          house.longitude, 
          house.media
        FROM favorites
        JOIN house ON favorites.property_id = house.id
        WHERE favorites.user_id = $1
      `,
      values: [userId],
    };

    const result = await pool.query(query);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'No favorites found for this user' });
    }

    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching user favorites:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

//comments

export const getCommentsByUserId = async (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({ success: false, message: 'User ID is required' });
  }

  try {
    const query = {
      text: 'SELECT * FROM comments WHERE user_id = $1',
      values: [userId],
    };

    const result = await pool.query(query);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'No comments found for this user' });
    }

    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching user comments:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


export const getCommentsByPublication = async (req, res) => {
  const publicationId = req.params.publicationId;

  if (!publicationId) {
    return res.status(400).json({ success: false, message: 'Publication ID is required' });
  }

  try {
    const query = {
      text: `
        SELECT comments.comment_id, comments.publication_id, comments.user_id, comments.content, comments.date_created, comments.edited, users.username
        FROM comments
        JOIN users ON comments.user_id = users.id
        WHERE comments.publication_id = $1
      `,
      values: [publicationId],
    };

    const result = await pool.query(query);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'No comments found for this publication' });
    }

    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching publication comments:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const getCommentsByUser = async (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(400).json({ success: false, message: 'User ID is required' });
  }

  try {
    const query = {
      text: `
        SELECT comments.comment_id, comments.publication_id, comments.user_id, comments.content, comments.date_created, comments.edited, users.username
        FROM comments
        JOIN users ON comments.user_id = users.id
        WHERE comments.user_id = $1
      `,
      values: [userId],
    };

    const result = await pool.query(query);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'No comments found for this user' });
    }

    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching user comments:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


export const getComments = async (req, res) => {
  try {
    const query = 'SELECT * FROM comments';

    const result = await pool.query(query);

    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const uploadComment = async (req, res) => {
  try {
    const { userId, publicationId, content } = req.body;

    // Insert the new comment into the database
    const query = {
      text: 'INSERT INTO comments (publication_id, user_id, content, date_created) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *',
      values: [publicationId, userId, content]
    };

    const result = await pool.query(query);

    res.status(201).json({ success: true, comment: result.rows[0] });
  } catch (error) {
    console.error('Error uploading comment:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;

    // Delete the comment from the database
    const query = {
      text: 'DELETE FROM comments WHERE comment_id = $1 RETURNING *',
      values: [commentId]
    };

    const result = await pool.query(query);

    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Comment not found' });
    }

    res.status(200).json({ success: true, message: 'Comment deleted successfully', deletedComment: result.rows[0] });
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export const updateComment = async (req, res) => {
  try {
    const commentId = req.params.commentId;
    const { content } = req.body;

    const query = {
      text: 'UPDATE comments SET content = $1, edited = $2 WHERE comment_id = $3 RETURNING *',
      values: [content, true, commentId]
    };

    const result = await pool.query(query);

    if (result.rowCount === 0) {
      return res.status(404).json({ success: false, message: 'Comment not found' });
    }

    res.status(200).json({ success: true, message: 'Comment updated successfully', updatedComment: result.rows[0] });
  } catch (error) {
    console.error('Error updating comment:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
