const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, 'templates'); // utilizamos PATH para sair do diretório (pasta) atual e entramos no diretorio de templates de html

//ler o boy

app.use(
    express.urlencoded({ //leitura da biblioteca qs
        extended: true,
    }),
);

app.get('/users/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

app.post('/users/save', (req, res) => { //post para armazenar o form
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é: ${name}, e ele tem ${age} anos.`);

    res.sendFile(`${basePath}/userform.html`);
});

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

