const db = require('../configs/dbConfig');

// Função para buscar todos os produtos no banco de dados
async function getAllProdutos() {
    const query = 'SELECT * FROM produtos';
    const [rows] = await db.query(query);
    return rows;
}

// Função para criar um novo produto no banco de dados
async function createProduto(nome, descricao, preco, data_atualizado) {
    const query = 'INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(query, [nome, descricao, preco, data_atualizado]);
    const novoProdutoId = result.insertId;
    return { id: novoProdutoId, nome, descricao, preco, data_atualizado };
}

// Função para atualizar um produto no banco de dados
async function updateProduto(id, nome, descricao, preco, data_atualizado) {
    const query = 'UPDATE produtos SET nome=?, descricao=?, preco=?, data_atualizado=? WHERE id=?';
    await db.query(query, [nome, descricao, preco, data_atualizado, id]);
    return { id, nome, descricao, preco, data_atualizado };
}

// Função para excluir um produto do banco de dados
async function deleteProduto(id) {
    const query = 'DELETE FROM produtos WHERE id=?';
    await db.query(query, [id]);
}

module.exports = {
    getAllProdutos,
    createProduto,
    updateProduto,
    deleteProduto
};