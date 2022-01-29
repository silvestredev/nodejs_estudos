const fs = require('fs');
const antigoNome = 'Vitor.txt';
const novoNome = 'Ichigo.txt';


fs.rename(antigoNome, novoNome, (err) => {
    if(err) {
        console.log(err);
        return 
    } else {
        console.log(`O arquivo ${antigoNome} foi renomeado para: ${novoNome}`);
    };
});