const express = require('express');
const router = express.Router();
const validarCamposMiddleware = require('../middlewares/validarCamposMiddleware');
const produtosController = require('../controllers/produtosController');

// Endpoint para buscar todos os produtos
router.get('/produtos', produtosController.getAllProdutos);

// Endpoint para criar um novo produto
router.post('/produtos', validarCamposMiddleware, produtosController.createProduto);

// Endpoint para atualizar um produto existente
router.put('/produtos/:id', validarCamposMiddleware, produtosController.updateProduto);

// Endpoint para excluir um produto
router.delete('/produtos/:id', produtosController.deleteProduto);

module.exports = router;