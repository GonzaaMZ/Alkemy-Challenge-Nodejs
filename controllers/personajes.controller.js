
const { response } = require('express');
const Personaje = require('../models/personaje');


const obtenerPersonajes = async (req, res = response) => {

    const personajes = await Personaje.findAll({
        attributes: ['idPersonaje', 'nombre', 'imagen']
    })

    res.json(personajes)

}


const crearPersonaje = async (req, res = response) => {

    Personaje.sync();

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


const detallePersonaje = async (req, res = response) => {

    const {id} = req.params;

    const personaje = await Personaje.findByPk(id);

    res.json(personaje)

}


const actualizarPersonaje = async (req, res = response) => {

    const {id} = req.params;
    
    const {nombre, edad, ...body} = req.body;

    const data = {
        ...body,
        nombre,
        edad
    }
    try {
        const personajeActualizar = await Personaje.update(data, {
            where: {
                id: id
            }
        });

        const personaje = await Personaje.findByPk(id);

        return res.status(200).json({
            msg : `Registros afectados: ${personajeActualizar}`,
            personaje

        });


    } catch (error) {
        console.log(error)
    }

}


const borrarPersonaje = async (req, res = response) => {

    const {id} = req.params;


    const personajeBorrar = await Personaje.destroy({
        where: {
            id: id
        }
    })

    return res.status(200).json({
        msg: `Personaje con id ${id} borrada con éxito`
    });

}

module.exports = {
    crearPersonaje,
    obtenerPersonajes,
    detallePersonaje,
    actualizarPersonaje,
    borrarPersonaje
}