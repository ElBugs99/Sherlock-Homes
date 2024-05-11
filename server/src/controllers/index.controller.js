//aca van las operaciones (callbacks, db, etc)
//import { Pool } from 'pg';
import pkg from 'pg';
const { Pool } = pkg;//conjunto de conexiones

//configuraciones
export const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Holaholahola2020+',
    database: 'sherlockHomes',
    port: 5432
})

export const getHouses = async (req, res) => {
    try {
      const { page = 1, limit = 10 } = req.query; // Default page is 1, default limit is 10
      const offset = (page - 1) * limit;
  
      // Query to fetch paginated data
      const query = {
        text: 'SELECT * FROM house LIMIT $1 OFFSET $2',
        values: [limit, offset],
      };
  
      // Query to count total number of elements
      const countQuery = 'SELECT COUNT(*) FROM house';
  
      // Execute both queries concurrently using Promise.all
      const [dataResponse, countResponse] = await Promise.all([
        pool.query(query),
        pool.query(countQuery),
      ]);
  
      const data = dataResponse.rows;
      const totalCount = parseInt(countResponse.rows[0].count);
  
      // Construct response object with paginated data and total count
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

export const getHouseById = async(req, res) => {
    //res.send('house ID: ' + req.params.id);
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM houses WHERE id = $1', [id]);
    console.log(response.rows)
    res.json(response.rows)
}

export const deleteHouse = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE * FROM houses WHERE id = $1', [id]);
    console.log(response);
}

export const updateHouse = async(req, res) => {
    
}