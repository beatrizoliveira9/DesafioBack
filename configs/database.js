const mysql = require('mysql2');
require('dotenv').config();

// Configuração da conexão com o banco de dados usando variáveis de ambiente
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

module.exports = connection;