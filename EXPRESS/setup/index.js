const express = require('express');
const app = express(); // executando o express;
const port = 3000; // variavel ambiente

app.get('/', (req, res) => { // O primeiro parametro é a ROTA (URL) // REQ é o que recebemos do user e RES é o que respondemos.
    res.send('Olá mundo!');
});

app.listen(port, () => {
    console.log(`O servidor está rodando na porta: ${port}`);
});