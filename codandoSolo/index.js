const fs = require('fs');
fs.readFile('texto.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log('Este foi o erro:' + ' ' + err);
    } else {
        console.log(data);
    };
});

const mediaArit = require('./modulo');
mediaArit(4, 3, 2, 1);