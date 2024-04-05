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
