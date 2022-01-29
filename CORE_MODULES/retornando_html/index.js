const http = require('http'); 
const port = 3000; //criando a porta do server 

const server = http.createServer((req, res) =>{ //criando o server
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text.html',); //mudando o conteudo para html
    res.end('<h1>Olá, este é meu primeiro server com HTML</h1><p>Testando atualização</p>',); //retornando um titulo com h1
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`); //retornando a mensagem com o servidor rodando na porta
});
