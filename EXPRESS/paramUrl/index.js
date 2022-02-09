const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, 'templates'); // utilizamos PATH para sair do diretório (pasta) atual e entramos no diretorio de templates de html

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    console.log(`Estamos buscando o usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`); // passamos o nome do arquivo que queremos renderizar após chamarmos o basePath;
});

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`); // passamos o nome do arquivo que queremos renderizar após chamarmos o basePath;
});

app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`);
});