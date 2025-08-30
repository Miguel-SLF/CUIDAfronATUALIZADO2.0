const Client = require('../models/Client');

const registerClient = (req, res) => {
  const { nome, email, cpf, rg, endereco, telefone, dataNascimento, responsavel, tipoSanguineo, medicamentosAlergia, diagnostico } = req.body;

  if (!nome || !email || !cpf) {
    return res.status(400).json({ mensagem: "Nome, e-mail e CPF são obrigatórios." });
  }

  try {
    const newClient = Client.create({ nome, email, cpf, rg, endereco, telefone, dataNascimento, responsavel, tipoSanguineo, medicamentosAlergia, diagnostico });
    res.status(201).json({ mensagem: "Cadastro do cidadão realizado com sucesso!", cliente: newClient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};

module.exports = { registerClient };