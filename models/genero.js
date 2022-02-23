
const {Sequelize, DataTypes} = require('sequelize')

const Pelicula = require('../models/pelicula')

const sequelize = new Sequelize('challenge_alkemy_nodejs', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
});

const Genero = sequelize.define('Genero', {

    idGenero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    
    imagen: {type: DataTypes.STRING},
    
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },


},
{
    tableName: 'Generos',
    timestamps: false
});

Genero.hasMany(Pelicula);

module.exports = Genero;