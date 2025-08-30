// src/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

const authRoutes = require('./routes/authRoutes');

// Middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor back-end do CUIDA está rodando!');
});

// Rotas da API
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});









