//npm install minimist = facilitar a extração de argumentos

const minimist = require('minimist');

const args = minimist(process.argv.slice(2, 4));
console.log(args);

const nome = args.nome; //no console = node index.js --nome=Vitor
console.log(nome)

const profissao = args.profissao; // no console = node index.js --profissao=Dev
console.log(profissao);

console.log(`Olá, meu nome é ${nome} e eu sou um ${profissao}`);