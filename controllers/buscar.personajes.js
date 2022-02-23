const { response } = require("express");
const { Op } = require("sequelize");

const Personaje = require("../models/personaje");

const buscarPersonaje = (req, res = response) => {
    
    const {name, age, movies} = req.query; 

    if (name) {
        buscarPersonajeNom(name, res);
    }
    else if(age){
        buscarPersonajeEdad(age, res);
    }


}

const buscarPersonajeNom = async (name = '', res = response) => {

    const filtroNombre = await Personaje.findAll({
        where: {
            nombre: {
                [Op.substring] : name
            }
        }
    });

    res.json({
        results: filtroNombre
    });

}


const buscarPersonajeEdad = async (edad , res = response) => {

    const filtroEdad = await Personaje.findAll({
        where: {
            edad : edad
        }
    });

    res.json({
        results: filtroEdad
    })

}

module.exports = {
    buscarPersonaje
}