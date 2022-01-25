const meuModulo = require('./meu_modulo');
const soma = meuModulo.soma; //encapsulando em uma variável para não ter que declarar 'meuModulo.soma' (economizar linhas);

soma(4, 2);