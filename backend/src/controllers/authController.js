// src/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  try {
    const { nome, email, password } = req.body;

    // Validação de campos vazios
    if (!nome || !email || !password) {
      return res.status(400).json({ mensagem: "Preencha todos os campos!" });
    }

    const existingUser = User.findByEmail(email);
    // Verificação de usuário já cadastrado
    if (existingUser) {
      return res.status(409).json({ mensagem: "Usuário já cadastrado!" });
    }

    const newUser = await User.create({ nome, email, password });
    
    // Gerar um token JWT para o usuário recém-cadastrado
    const token = jwt.sign(
      { id: newUser.id, nome: newUser.nome, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = User.findByEmail(email);
    if (!user) {
      return res.status(400).json({ mensagem: "E-mail ou senha incorretos." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ mensagem: "E-mail ou senha incorretos." });
    }

    const token = jwt.sign(
      { id: user.id, nome: user.nome, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ mensagem: "Login bem-sucedido!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: "Erro interno do servidor." });
  }
};

module.exports = { register, login };