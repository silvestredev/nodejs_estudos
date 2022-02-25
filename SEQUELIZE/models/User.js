const { DataTypes } = require('sequelize'); //método do sequelize que nos dá acesso a todos os tipos de dados do banco de dados
const db = require('../db/conn') //conexão com o banco

const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    occupation: {
        type: DataTypes.STRING,
        required: true,
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    }
});

module.exports = User;

//criando a model e a table no db