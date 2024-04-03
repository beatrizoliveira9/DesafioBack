const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

// Endpoint para buscar todos os produtos
router.get('/', produtosController.getAllProdutos);

// Endpoint para buscar um produto pelo ID
router.get('/:id', produtosController.getProdutoById);

// Endpoint para criar um novo produto
router.post('/', produtosController.createProduto);

// Endpoint para atualizar um produto existente
router.put('/:id', produtosController.updateProduto);

// Endpoint para excluir um produto existente
router.delete('/:id', produtosController.deleteProduto);

// Rota para exibir a página de adicionar novo produto
router.get('/novo', (req, res) => {
    res.sendFile('novoProduto.html', { root: 'views' });
});

module.exports = router;