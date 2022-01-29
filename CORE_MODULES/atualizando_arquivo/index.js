const fs = require('fs');
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {

    const url = require('url').parse(req.url, true);
    const name = url.query.name;

    if(!name) {  
    fs.readFile('index.html', 'utf-8', (err, data) => {
        res.writeHead(200, {'content-type': 'text/html'}); // transformando para a leitura do html
        res.write(data);
        return res.end();
    })
    } else {
        const nameNewLine = name + '\r\n'

        fs.appendFile('Arquivo.txt', nameNewLine, (err, data) => {
            res.writeHead(302, {
                Location: '/'
            })
            return res.end();
        })
    }
});

server.listen(port, () => {
    console.log(`O Server está rodando na porta: ${port}`);
});

//neste codigo atualizamos o arquivo, ao contrario do readFile, appendFile atualiza