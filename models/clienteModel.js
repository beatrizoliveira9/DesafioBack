const db = require('../configs/dbConfig');

// Função para buscar todos os clientes no banco de dados
async function getAllClientes() {
    const query = 'SELECT * FROM clientes';
    const [rows] = await db.query(query);
    return rows;
}

// Função para criar um novo cliente no banco de dados
async function createCliente(nome, sobrenome, email, idade) {
    const query = 'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(query, [nome, sobrenome, email, idade]);
    const novoClienteId = result.insertId;
    return { id: novoClienteId, nome, sobrenome, email, idade };
}

// Função para atualizar um cliente no banco de dados
async function updateCliente(id, nome, sobrenome, email, idade) {
    const query = 'UPDATE clientes SET nome=?, sobrenome=?, email=?, idade=? WHERE id=?';
    await db.query(query, [nome, sobrenome, email, idade, id]);
    return { id, nome, sobrenome, email, idade };
}

// Função para excluir um cliente do banco de dados
async function deleteCliente(id) {
    const query = 'DELETE FROM clientes WHERE id=?';
    await db.query(query, [id]);
}

module.exports = {
    getAllClientes,
    createCliente,
    updateCliente,
    deleteCliente
};