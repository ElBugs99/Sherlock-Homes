//aca van las operaciones (callbacks, db, etc)
//import { Pool } from 'pg';
import pkg from 'pg';
const { Pool } = pkg;//conjunto de conexiones

//configuraciones
const pool = new Pool({
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

/* export default {
    getHouses
}; */

//Base de datos
//pg es tan solo un modulo de conexion