const express = require('express');
const router = express.Router();
const validarCamposMiddleware = require('../middlewares/validarCamposMiddleware');
const clientesController = require('../controllers/clientesController');

// Endpoint para buscar todos os clientes
router.get('/clientes', clientesController.getAllClientes);

// Endpoint para criar um novo cliente
router.post('/clientes', validarCamposMiddleware, clientesController.createCliente);

// Endpoint para atualizar um cliente existente
router.put('/clientes/:id', validarCamposMiddleware, clientesController.updateCliente);

// Endpoint para excluir um cliente
router.delete('/clientes/:id', clientesController.deleteCliente);

module.exports = router;