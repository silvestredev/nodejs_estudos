const fs = require('fs');

console.log('inicio');

fs.writeFile('arquivo.txt', '', (err) => { //writeFIle cria um arquivo, retorna uma menssagem e precisa de uma arrow function
    setTimeout( () => { // define um tempo para o retorno do console.log
        console.log('Arquivo criado!');
    }, 5000);
});

console.log('fim')

//criamos uma função que é executada por último, com um método assícrono.