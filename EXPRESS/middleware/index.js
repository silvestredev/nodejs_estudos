const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const basePath = path.join(__dirname, 'templates'); // utilizamos PATH para sair do diretório (pasta) atual e entramos no diretorio de templates de html

const checkAuth = function(req, res, next) { // função para checar se o user está logado
    req.authStatus = true;
    if(req.authStatus){
        console.log('Está logado!');
        next();
    } else {
        console.log('Não está logado!');
        next();
    };
};

app.use(checkAuth);

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`); // passamos o nome do arquivo que queremos renderizar após chamarmos o basePath;
});

app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`);
});