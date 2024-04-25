// Importando as dependências
const express = require('express');

// Criando o aplicativo Express
const app = express();

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Simulando um array de objetos
let data = [];

// Rota para obter todos os dados
app.get('/data', (req, res) => {
    res.json(data);
});

// Rota para inserir novos dados
app.post('/data', (req, res) => {
    const newData = req.body;
    data.push(newData);
    res.json({ message: 'Dados inseridos com sucesso', newData });
});

// Rota para deletar todos os dados
app.delete('/data', (req, res) => {
    data = [];
    res.json({ message: 'Todos os dados foram deletados' });
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
