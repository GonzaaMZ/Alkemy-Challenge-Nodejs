
const {Sequelize, DataTypes} = require('sequelize')

const Personaje = require('../models/personaje');

const sequelize = new Sequelize('challenge_alkemy_nodejs', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
});

const Pelicula = sequelize.define('Pelicula', {

    idPelicula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    
    caratula:{type: DataTypes.STRING},
    
    titulo:{
        type: DataTypes.STRING,
        allowNull: false
    },

    calificacion: {
        type: DataTypes.INTEGER
    }

},
{
    tableName: 'Peliculas',
    updatedAt: false
});

Pelicula.belongsToMany(Personaje, {through: 'PersonajesPeliculas'});

Personaje.belongsToMany(Pelicula, {through: 'PersonajesPeliculas'});

module.exports = Pelicula;