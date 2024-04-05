const connection = require('../configs/database');

// Função para buscar todos os clientes
exports.getAllClientes = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM clientes', (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
};

// Função para buscar um cliente pelo ID
const clientesModel = require('../models/clientesModel');

async function getAllClientes() {
    return await clientesModel.getAllClientes();
}

async function createCliente(nome, sobrenome, email, idade) {
    return await clientesModel.createCliente(nome, sobrenome, email, idade);
}

async function updateCliente(id, nome, sobrenome, email, idade) {
    return await clientesModel.updateCliente(id, nome, sobrenome, email, idade);
}

async function deleteCliente(id) {
    return await clientesModel.deleteCliente(id);
}

module.exports = {
    getAllClientes,
    createCliente,
    updateCliente,
    deleteCliente
};
