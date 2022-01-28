const chalk = require('chalk');

const aprovadoReprovado = (nota) => {
    if(nota > 6) {
        console.log(chalk.bgGreen.black('Parabéns, você está aprovado!'))
    } else {
        console.log(chalk.bgRed.black('Você foi reprovado! :('));
    }
}

aprovadoReprovado(7);

//chalk nos permite alterar a cor do backgroud (ex: bgRed) e da letra (ex: black) no console. Possui outras finalidades como grifar (.bold);