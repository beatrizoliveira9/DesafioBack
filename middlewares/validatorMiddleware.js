function validarCamposMiddleware(req, res, next) {
    const { nome, sobrenome, email, idade, descricao, preco, data_atualizado } = req.body;

    // Validação dos campos
    if (!nome || !sobrenome || !email || !idade || !descricao || !preco || !data_atualizado) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios.' });
    }

    // Verifica se o preço é um número válido
    if (isNaN(preco) || preco <= 0) {
        return res.status(400).json({ mensagem: 'O preço deve ser um número positivo.' });
    }

    // Verifica se a idade é um número válido
    if (isNaN(idade) || idade <= 0) {
        return res.status(400).json({ mensagem: 'A idade deve ser um número positivo.' });
    }

    // Verifica se a data de atualização é válida
    if (isNaN(Date.parse(data_atualizado))) {
        return res.status(400).json({ mensagem: 'Data de atualização inválida.' });
    }

    // Se todas as validações passarem, continua para o próximo middleware
    next();
}

module.exports = validarCamposMiddleware;