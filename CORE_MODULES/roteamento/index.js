const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) =>{
    const q = url.parse(req.url, true);
    const name = q.query.name;
    const filename = q.pathname.substring(1);

    if(filename.includes('html')) {
        if(fs.existsSync(filename)) {
            fs.readFile(filename,'utf-8', (err, data) => {
                res.writeHead(200, {'content-type': 'text/html'})
                res.write(data);
                return res.end();
            })
        } else {
            fs.readFile('404.html', 'utf-8', (err, data) => {
                res.writeHead(404, {'content-type': 'text/html'})
                res.write(data);
                return res.end();
            })

        }
    }
})

server.listen(port, () => {
    console.log(`O servidor esstá rodando na porta: ${port}`);
});