const mysql = require('mysql2');
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

// Configuração da conexão com o banco de dados
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

// Criação da conexão com o banco de dados
const connection = mysql.createConnection(dbConfig);

// Conexão com o banco de dados
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão bem-sucedida com o banco de dados MySQL');
});

module.exports = connection;