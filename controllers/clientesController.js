const express = require('express');
const router = express.Router();
const clientesService = require('../services/clientesService');

// Endpoint para buscar todos os clientes
router.get('/clientes', async (req, res, next) => {
    try {
        const clientes = await clientesService.getAllClientes();
        res.json(clientes);
    } catch (err) {
        next(err);
    }
});

// Endpoint para criar um novo cliente
router.post('/clientes', async (req, res, next) => {
    const { nome, sobrenome, email, idade } = req.body;
    try {
        const novoCliente = await clientesService.createCliente(nome, sobrenome, email, idade);
        res.status(201).json(novoCliente);
    } catch (err) {
        next(err);
    }
});

// Endpoint para atualizar um cliente existente
router.put('/clientes/:id', async (req, res, next) => {
    const id = req.params.id;
    const { nome, sobrenome, email, idade } = req.body;
    try {
        const clienteAtualizado = await clientesService.updateCliente(id, nome, sobrenome, email, idade);
        res.json(clienteAtualizado);
    } catch (err) {
        next(err);
    }
});

// Endpoint para excluir um cliente
router.delete('/clientes/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        await clientesService.deleteCliente(id);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});

module.exports = router;