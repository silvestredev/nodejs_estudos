const express = require('express');
const router = express.Router();
const path = require('path');

const basePath = path.join(__dirname, '../templates'); // utilizamos PATH para sair do diretório (pasta) atual e entramos no diretorio de templates de html

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

router.post('/save', (req, res) => { //post para armazenar o form
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é: ${name}, e ele tem ${age} anos.`);

    res.sendFile(`${basePath}/userform.html`);
});

router.get('/:id', (req, res) => {
    console.log(`Estamos buscando o usuário: ${req.params.id}`);

    res.sendFile(`${basePath}/users.html`); // passamos o nome do arquivo que queremos renderizar após chamarmos o basePath;
});

module.exports = router;
