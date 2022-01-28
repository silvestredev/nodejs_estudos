// nome
const seila = process.argv;
console.log(seila);

const nome = seila[2].split('=')[1];
console.log(nome);

const idade = seila[3].split('=')[1];
console.log(idade);

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos`);