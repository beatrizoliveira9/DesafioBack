const express = require('express');
const app = express();

const clientesRoutes = require('./routes/clientesRoutes');
const produtosRoutes = require('./routes/produtosRoutes');

app.use(express.json()); // Habilita o uso do JSON nas requisições
app.use(clientesRoutes); // Registra as rotas relacionadas aos clientes
app.use(produtosRoutes); // Registra as rotas relacionadas aos produtos

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});