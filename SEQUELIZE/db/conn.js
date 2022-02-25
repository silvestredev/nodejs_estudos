const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('nodesequelize2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// try{
//    sequelize.authenticate()
//    console.log('Sequelize conectado!')
//} catch(err) {
//    console.log(err)
//}

module.exports = sequelize;

// conexão com o db mysql, executando o sequelize