const url = require('url');
const address = 'https://www.vitorsilvestre.com.br/catalogo?produtos=cadeira'; //criando uma url (adress = endereço)

const parsedUrl = new url.URL(address); //variavel para decompor a URL e retornar o que for solicitado, exemplos abaixo

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('produtos'));
