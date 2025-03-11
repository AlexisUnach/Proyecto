import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',       // O la IP de tu servidor
    user: 'alexis',           // Tu usuario de MySQL
    password: '1234',         // Tu contraseña
    database: 'Usuarios',      // Tu base de datos
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
