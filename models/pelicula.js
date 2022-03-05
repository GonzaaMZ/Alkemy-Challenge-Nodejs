
const {Sequelize, DataTypes, Model} = require('sequelize')

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
    
    img:{
        type: DataTypes.STRING,
        get() {
            const rawValue = this.getDataValue('img');
            return rawValue ? rawValue.toUpperCase() : null;
          }
    },
    
    titulo:{
        type: DataTypes.STRING,
        allowNull: false
    },

    calificacion: {
        type: DataTypes.INTEGER
    },

},
{
    tableName: 'Peliculas',
    updatedAt: false
});



module.exports = Pelicula;
