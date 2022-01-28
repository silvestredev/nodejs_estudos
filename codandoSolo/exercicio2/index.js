const inquirer = require('inquirer');
const chalk = require('chalk');
const { error } = require('console');

inquirer.prompt([
    {
        name: 'p1', message: 'Qual é o seu nome?'
    },
    {
        name: 'p2', message: 'Qual a sua idade?'
    },
])
.then((answers) => {
    const nome = answers.p1;
    const idade = parseInt(answers.p2);

    if(!Number.isInteger(idade)){
        throw new Error(chalk.bgRed('A idade precisa ser um número inteiro!'))
    }

    console.log(chalk.bgYellow.black(`Olá ${nome}! Você possui ${idade} anos, certo?`))
}
)
.catch((err) => {console.log(err)})


//Neste exercício, utilizamos 2 módulos externos.
//Inquirer para receber o nome do usuário e sua idade (que precisa ser um número inteiro, caso contrário, um erro é exibido)
//E o chalk para estilização da mensagens