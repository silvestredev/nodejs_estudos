const path = require('path');

// path absoluto
console.log(path.resolve('text.txt'));

//formando path

const midFolder = 'Relatórios';
const fileName = 'Vitor.txt';

const finalPath = path.join('/', 'arquivos', midFolder, fileName);
console.log(finalPath);