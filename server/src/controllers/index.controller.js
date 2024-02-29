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

export const getHouses = async(req, res) => {
    const response = await pool.query('select * from houses');
    console.log(response.rows);
    res.send(response.rows)

}

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

//Base de datos
//pg es tan solo un modulo de conexion