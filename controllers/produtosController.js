// Importando o serviço de produtos para manipular os dados do banco de dados
const produtosService = require('../services/produtosService');

// Endpoint para buscar todos os produtos
exports.getAllProdutos = async (req, res, next) => {
    try {
        const produtos = await produtosService.getAllProdutos();
        res.json(produtos);
    } catch (error) {
        next(error);
    }
};

// Endpoint para buscar um produto pelo ID
exports.getProdutoById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const produto = await produtosService.getProdutoById(id);
        if (!produto) {
            res.status(404).json({ message: 'Produto não encontrado' });
            return;
        }
        res.json(produto);
    } catch (error) {
        next(error);
    }
};

// Endpoint para criar um novo produto
exports.createProduto = async (req, res, next) => {
    const { nome, descricao, preco, data_atualizado } = req.body;
    try {
        const novoProduto = await produtosService.createProduto(nome, descricao, preco, data_atualizado);
        res.status(201).json(novoProduto);
    } catch (error) {
        next(error);
    }
};

// Endpoint para atualizar um produto existente
exports.updateProduto = async (req, res, next) => {
    const { id } = req.params;
    const { nome, descricao, preco, data_atualizado } = req.body;
    try {
        const produtoAtualizado = await produtosService.updateProduto(id, nome, descricao, preco, data_atualizado);
        res.json(produtoAtualizado);
    } catch (error) {
        next(error);
    }
};

// Endpoint para excluir um produto existente
exports.deleteProduto = async (req, res, next) => {
    const { id } = req.params;
    try {
        await produtosService.deleteProduto(id);
        res.json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
        next(error);
    }
};