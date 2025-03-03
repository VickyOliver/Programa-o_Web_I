// Importando módulos
const express = require('express');
const app = express();
const PORT = 3000;

// Configurando EJS como template engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rota principal
app.get('/', async (req, res) => {
    res.render('index');
});

// Rota para detalhes do artista 
app.get('/artist', (req, res) => {
    res.render('artist');
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
