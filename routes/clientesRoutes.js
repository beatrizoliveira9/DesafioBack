const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Endpoint para buscar todos os clientes
router.get('/', clientesController.getAllClientes);

// Endpoint para buscar um cliente pelo ID
router.get('/:id', clientesController.getClienteById);

// Endpoint para criar um novo cliente
router.post('/', clientesController.createCliente);

// Endpoint para atualizar um cliente existente
router.put('/:id', clientesController.updateCliente);

// Endpoint para excluir um cliente existente
router.delete('/:id', clientesController.deleteCliente);

// Rota para exibir a página de adicionar novo cliente
router.get('/novo', (req, res) => {
    res.sendFile('novoCliente.html', { root: 'views' });
});

module.exports = router;