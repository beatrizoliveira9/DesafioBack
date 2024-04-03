const connection = require('../configs/database');

// Função para buscar todos os produtos
exports.getAllProdutos = () => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM produtos', (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            resolve(results);
        });
    });
};

// Função para buscar um produto pelo ID
exports.getProdutoById = (id) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM produtos WHERE id = ?', [id], (error, results) => {
            if (error) {
                reject(error);
                return;
            }
            if (results.length === 0) {
                resolve(null); // Produto não encontrado
                return;
            }
            resolve(results[0]); // Retorna o produto encontrado
        });
    });
};
