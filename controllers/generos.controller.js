const { response } = require("express");
const { Op } = require("sequelize");

const Genero = require("../models/genero");


const obtenerGeneros = async () => {



}

const crearGenero = async (req, res = response) => {

    await Genero.sync({force: true});

    const {nombre,...body} = req.body;
    
    const data = {
        ...body,
        nombre,
    }

    try {
        const genero = await Genero.create(data);

        return res.status(200).json({genero})
        
    } catch (error) {
        console.log(error);
    }

}



module.exports = {
    crearGenero

}
