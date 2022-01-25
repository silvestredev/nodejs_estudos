const fs = require('fs');

console.log('O que o Vitor está pensando?');

fs.readFile('pensamentos.txt', 'utf-8', (err, data) => {
    if(err){
        console.log('Este foi o erro:' + ' ' + err);
    } else {
        console.log(data);
    }
});