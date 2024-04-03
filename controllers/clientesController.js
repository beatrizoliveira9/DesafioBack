// Importando o serviço de clientes para manipular os dados do banco de dados
const clientesService = require('../services/clientesService');

// Endpoint para buscar todos os clientes
exports.getAllClientes = async (req, res, next) => {
    try {
        const clientes = await clientesService.getAllClientes();
        res.json(clientes);
    } catch (error) {
        next(error);
    }
};

// Endpoint para buscar um cliente pelo ID
exports.getClienteById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const cliente = await clientesService.getClienteById(id);
        if (!cliente) {
            res.status(404).json({ message: 'Cliente não encontrado' });
            return;
        }
        res.json(cliente);
    } catch (error) {
        next(error);
    }
};

// Endpoint para criar um novo cliente
exports.createCliente = async (req, res, next) => {
    const { nome, sobrenome, email, idade } = req.body;
    try {
        const novoCliente = await clientesService.createCliente(nome, sobrenome, email, idade);
        res.status(201).json(novoCliente);
    } catch (error) {
        next(error);
    }
};

// Endpoint para atualizar um cliente existente
exports.updateCliente = async (req, res, next) => {
    const { id } = req.params;
    const { nome, sobrenome, email, idade } = req.body;
    try {
        const clienteAtualizado = await clientesService.updateCliente(id, nome, sobrenome, email, idade);
        res.json(clienteAtualizado);
    } catch (error) {
        next(error);
    }
};

// Endpoint para excluir um cliente existente
exports.deleteCliente = async (req, res, next) => {
    const { id } = req.params;
    try {
        await clientesService.deleteCliente(id);
        res.json({ message: 'Cliente excluído com sucesso' });
    } catch (error) {
        next(error);
    }
};