const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

const users = require('./users');
const basePath = path.join(__dirname, 'templates'); // utilizamos PATH para sair do diretório (pasta) atual e entramos no diretorio de templates de html

const users = require('./users')

//ler o body
app.use(
    express.urlencoded({ //leitura da biblioteca qs
        extended: true,
    }),
);

app.use(express.json());

app.use('/users', users);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`); // passamos o nome do arquivo que queremos renderizar após chamarmos o basePath;
});

app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`);
});

