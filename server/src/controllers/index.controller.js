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
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const query = {
      text: 'SELECT * FROM house LIMIT $1 OFFSET $2',
      values: [limit, offset],
    };

    const countQuery = 'SELECT COUNT(*) FROM house';

    const [dataResponse, countResponse] = await Promise.all([
      pool.query(query),
      pool.query(countQuery),
    ]);

    const data = dataResponse.rows;
    const totalCount = parseInt(countResponse.rows[0].count);

    const responseObject = {
      data,
      meta: {
        totalCount,
        page: parseInt(page),
        limit: parseInt(limit),
      },
    };

    res.json(responseObject);
  } catch (error) {
    console.error('Error fetching houses:', error);
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

    // Check if response is empty (no house found)
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
    // Query to select all users
    const query = 'SELECT * FROM "users"';
    
    // Execute the query
    const result = await pool.query(query);

    // Send the result as JSON
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