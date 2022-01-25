const fs = require('fs'); // requisitando o file systen

fs.readFile('arquivo1.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
    } else { //esse else NÃO é necessário 
    console.log(data);
    }
});

// fs.readFile é um método do fs que serve para ler um arquivo específico.
// nele são passados 3 parametros: 1- a localização do arquivos;
// 2- utf-8,
// 3- uma arrow function para retornar um erro, caso haja, ou o que está escrito no arquivo.