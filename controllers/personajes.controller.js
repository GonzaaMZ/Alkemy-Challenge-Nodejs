
const { response } = require('express');
const Personaje = require('../models/personaje');

const crearPersonaje = async (req, res = response) => {

    //Personaje.sync();

    const {nombre, edad, ...body} = req.body;

    const data = {
        ...body,
        nombre,
        edad
    }
    try {
        const personaje = await Personaje.create(data);    
        
        return res.status(200).json({personaje});
        
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    crearPersonaje
}