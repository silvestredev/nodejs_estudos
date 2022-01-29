const fs = require('fs');
const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('mensagem.html', 'utf-8', (err, data) => {
        res.writeHead(200, {'content-type': 'text/html'}); // transformando para a leitura do html
        res.write(data);
        return res.end();
    })
});

server.listen(port, () => {
    console.log(`O Server está rodando na porta: ${port}`);
})

//Utilizamos a combinação de HTTP e FS para retornar um HTML a partir da leitura do readFile em um arquivo html;