const { response } = require("express");

const Genero = require("../models/genero");


const obtenerGeneros = async (req, res = response) => {

    const generos = await Genero.findAll({
        attributes: ['idGenero', 'nombre']
    })

    return res.json(generos);


}

const crearGenero = async (req, res = response) => {

    await Genero.sync({alter: true});

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
    crearGenero,
    obtenerGeneros
}
