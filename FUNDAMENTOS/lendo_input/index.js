const chalk = require('chalk');
const readline = require('readline').createInterface({ 
    input: process.stdin,
    output: process.stdout,
}); // criamos uma interface de recebimento e resposta

readline.question('Qual a comida favorita do Vitor?', (resposta) => { //readline question nos permite criar um questionamento no console. dois parâmetros são passados: uma string (com a pergunta) e uma arrow function (para criar as possiveis respostas e retornos)
    if(resposta === 'Pizza'){
        console.log(chalk.green('Você acertou! Parabéns!'))
    } else if(resposta === 'Hamburguer') {
        console.log(chalk.yellow('É... Quase! Essa é a minha segunda comida favorita!'));
    } else {
        console.log(chalk.red('Você errou!'));
    }
    readline.close(); //parar o loop da question
});

// Readline é um Core Module que, além de outras funções, nos permite fazer questões e criar interfaces no console.

