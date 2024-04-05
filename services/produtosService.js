const produtosModel = require('../models/produtosModel');

async function getAllProdutos() {
    return await produtosModel.getAllProdutos();
}

async function createProduto(nome, descricao, preco, data_atualizado) {
    return await produtosModel.createProduto(nome, descricao, preco, data_atualizado);
}

async function updateProduto(id, nome, descricao, preco, data_atualizado) {
    return await produtosModel.updateProduto(id, nome, descricao, preco, data_atualizado);
}

async function deleteProduto(id) {
    return await produtosModel.deleteProduto(id);
}

module.exports = {
    getAllProdutos,
    createProduto,
    updateProduto,
    deleteProduto
};