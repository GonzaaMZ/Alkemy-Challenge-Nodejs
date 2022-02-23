const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('challenge_alkemy_nodejs', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
});

const Personaje = sequelize.define('Personaje',{

    idPersonaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
   
    imagen:{type: DataTypes.STRING},
    
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },

    edad:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    peso: {type: DataTypes.INTEGER},

    historia: {type: DataTypes.TEXT},

},
{
    tableName: 'Personajes',
    timestamps: false

});

//Personaje.belongsToMany(Pelicula, {through: 'PersonajePeliculas'});

module.exports = Personaje;