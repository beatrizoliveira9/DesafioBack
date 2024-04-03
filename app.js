require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const httpErrors = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql2/promise');


const app = express();

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

// Routes
const indexRouter = require('./routes/index');
const clientesRouter = require('./routes/clientes');
const produtosRouter = require('./routes/produtos');

app.use('/', indexRouter);
app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

// Configurações do banco de dados
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root@localhost',
  password: '',
  database: 'backend'
});

// Rota para buscar dados do banco de dados
app.get('/clientes', async (req, res) => {
  try {
      const connection = await pool.getConnection();
      const [rows, fields] = await connection.query('SELECT * FROM clientes');
      connection.release();
      res.json(rows);
  } catch (error) {
      console.error('Erro ao buscar clientes:', error);
      res.status(500).json({ error: 'Erro ao buscar clientes' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});

module.exports = app;