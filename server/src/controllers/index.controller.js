//aca van las operaciones (callbacks, db, etc)
//import { Pool } from 'pg';
import pkg from 'pg';
const { Pool } = pkg;

export const getHouses = (req, res) => {
    res.send('houses');
}

/* export default {
    getHouses
}; */

//Base de datos
//pg es tan solo un modulo de conexion