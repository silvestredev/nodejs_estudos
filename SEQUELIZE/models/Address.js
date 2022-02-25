const { DataTypes } = require('sequelize'); //método do sequelize que nos dá acesso a todos os tipos de dados do banco de dados
const db = require('../db/conn') //conexão com o banco

const User = require('./User');

const Address = db.define('Address', { //criando a table de endereço
    street: {
        type: DataTypes.STRING,
        required: true,
    },
    number: {
        type: DataTypes.STRING,
        required: true,
    },
    city: {
        type: DataTypes.STRING,
        required: true,
    }

});

User.hasMany(Address)
Address.belongsTo(User); //relacionando com a model user

module.exports = Address;