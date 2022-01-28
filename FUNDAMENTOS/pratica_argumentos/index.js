// modulo externo
const minimist = require('minimist');
const args = minimist(process.argv);

// modulo interno
const soma = require('./soma');

const a = parseInt(args['a']);
const b = parseInt(args['b']);

//console.log(args);
soma(a, b);

//utilizei o modulo externo (minimist) e um modulo interno (soma) para fazer uma aplicação mais dinâmica. 