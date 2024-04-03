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
exports.getClienteById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM clientes WHERE id = ?', [id], (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            if (results.length === 0) {
                resolve(null); // Cliente não encontrado
                return;
            }
            resolve(results[0]); // Retorna o cliente encontrado
        });
    });
};
