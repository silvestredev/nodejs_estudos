const fs = require('fs');
console.log('inicio');

fs.writeFileSync('texto.txt', 'oi');
console.log('fim')