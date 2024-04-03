// Função de middleware para validar os campos de uma requisição
exports.validateFields = (req, res, next) => {
    // Verifica se todos os campos obrigatórios estão presentes na requisição
    const { nome, sobrenome, email, idade } = req.body;
    if (!nome || !sobrenome || !email || !idade) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    // Verifica se o campo 'idade' é um número inteiro
    if (typeof idade !== 'number' || !Number.isInteger(idade)) {
        return res.status(400).json({ message: 'A idade deve ser um número inteiro' });
    }

    // Se todos os campos forem válidos, passa para o próximo middleware
    next();
};