const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {

    const url = require('url').parse(req.url, true); // chamando o modulo url 
    const name = url.query.name; //pegando a url decomposta e buscando o parametro name

    res.statusCode = 200; //status positivo 
    res.getHeader('prototipe-type', 'text.html'); //criando o header com htlm
   
    if(!name) { //utilizando html para pedir ao usuario um nome, e retornando ele na query e no html
        res.end('<h1>Preencha o seu nome:</h1><form method = "GET"><input type = "text" name = "name" /><input type = "submit" value = "Enviar"></form>')
    } else {
        res.end(`<h1>Seja bem-vindo ${name}!</h1>`)
    };
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});