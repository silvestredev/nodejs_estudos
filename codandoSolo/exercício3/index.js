const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basesDoPath = path.join(__dirname, 'templates');

const rotas = require('./logar/router'); // importando os metódos do arquivo router.js

app.use(
    express.urlencoded({ //leitura da biblioteca qs
        extended: true,
    }),
);

app.use(express.json()); //transformar em obj json
app.use(express.static('public')); //middle para executar css
app.use('/logar', rotas); //middle para exe as rotas criadas no arquivo router.js

app.get('/', (req, res) => {
    res.sendFile(`${basesDoPath}/index.html`); //pag inicial
});

app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`);
});

