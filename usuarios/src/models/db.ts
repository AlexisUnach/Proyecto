import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',       
    user: 'alexis',           
    password: '1234',         
    database: 'Usuarios',      
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;
