const express = require('express');
const router = express.Router();
const produtosService = require('../services/produtosService');

// Endpoint para buscar todos os produtos
router.get('/produtos', async (req, res, next) => {
    try {
        const produtos = await produtosService.getAllProdutos();
        res.json(produtos);
    } catch (err) {
        next(err);
    }
});

// Endpoint para criar um novo produto
router.post('/produtos', async (req, res, next) => {
    const { nome, descricao, preco, data_atualizado } = req.body;
    try {
        const novoProduto = await produtosService.createProduto(nome, descricao, preco, data_atualizado);
        res.status(201).json(novoProduto);
    } catch (err) {
        next(err);
    }
});

// Endpoint para atualizar um produto existente
router.put('/produtos/:id', async (req, res, next) => {
    const id = req.params.id;
    const { nome, descricao, preco, data_atualizado } = req.body;
    try {
        const produtoAtualizado = await produtosService.updateProduto(id, nome, descricao, preco, data_atualizado);
        res.json(produtoAtualizado);
    } catch (err) {
        next(err);
    }
});

// Endpoint para excluir um produto
router.delete('/produtos/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        await produtosService.deleteProduto(id);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});

module.exports = router;