const inquirer = require('inquirer');

inquirer.prompt([
    {
    name: 'p1', message: 'Qual a nota do primeiro semestre?'
    },
    {name: 'p2', message: 'Qual a nota do segundo semestre?'},
])
.then((answers) => {
    const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2);
    console.log(`Sua média é ${media}`);
    if(media >= 6) {
        console.log('Parabéns, você passou de ano!');
    } else {
        console.log('Você reprovou de ano!')
    }
})
.catch(err => console.log(err));