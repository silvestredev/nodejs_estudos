const express = require('express');
const router = express.Router(); // Use a classe express.Router para criar manipuladores de rota modulares e montáveis. Uma instância de Router é um middleware e sistema de roteamento completo; por essa razão, ela é frequentemente referida como um “mini-aplicativo”
const port = 3000;

const path = require('path');
const basesDoPath = path.join(__dirname, '../templates');

router.get('/', (req, res) => {
    res.sendFile(`${basesDoPath}/login.html`);
}); //pag de login

router.post('/log', (req, res) => { //recebendo informações do formulário de login e retornando-os no console
    const name = req.body.name;
    const email = req.body.email;

    console.log(`O nome do usuário é: ${name} e seu e-mail é ${email}.`)

    res.sendFile(`${basesDoPath}/logado.html`); // enviando para a página de 'logado'
});

module.exports = router; // exportando os metodos