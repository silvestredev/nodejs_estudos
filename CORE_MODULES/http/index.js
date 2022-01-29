const http = require('http'); 
const port = 3000; //criando a porta do server 

const server = http.createServer((req, res) =>{ //criando o server
    res.write('Olá! Servidor criado.'); //uma mensagem para o servidor criado
    res.end(); //encerrando a mensagem para n ficar recarregando eternamente
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`); //retornando a mensagem com o servidor rodando na porta
});

//para derrubar o server no terminal é só usar o comando CTRL + C