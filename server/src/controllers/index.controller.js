//aca van las operaciones (callbacks, db, etc)
//import { Pool } from 'pg';
import pkg from 'pg';
const { Pool } = pkg;//conjunto de conexiones

//configuraciones
export const pool = new Pool({
  connectionString: 'postgres://root:YT0ZoNGfRB2dptn5QKUlCFMXRYbYkzqg@dpg-cp0kkcvjbltc73dv8uhg-a.oregon-postgres.render.com/sherlock',
  ssl: true
})

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
}

export const deleteHouse = async (req, res) => {
  const id = req.params.id;
  const response = await pool.query('DELETE * FROM house WHERE id = $1', [id]);
  console.log(response);
}

export const updateHouse = async (req, res) => {

}
