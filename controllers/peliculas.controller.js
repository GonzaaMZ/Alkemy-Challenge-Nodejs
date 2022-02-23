const { response } = require('express');
const Pelicula = require('../models/pelicula');



const obtenerPeliculas = async (req, res = response) => {

    const peliculas = await Pelicula.findAll({
        attributes: ['idPelicula','titulo', 'caratula','createdAt']
    })

    res.json(peliculas)

}

const crearPelicula = async (req, res = response) => {

    Pelicula.sync();

    const {titulo,...body} = req.body;
    
    const data = {
        ...body,
        titulo,
    }

    try {
        const pelicula = await Pelicula.create(data);

        return res.status(200).json({pelicula})
        
    } catch (error) {
        console.log(error);
    }


}

const detallePelicula = async (req, res = response) => {

    const {id} = req.params;

    const pelicula = await Pelicula.findByPk(id);

    res.json(pelicula)

}

const actualizarPelicula = async (req, res = response) => {

    const {id} = req.params;
    const {titulo, ...body} = req.body;

    const data = {
        ...body,
        titulo
    }

    try {
 
        const peliculaActualizar = await Pelicula.update(data, {
            where: {
               id : id
            }
        });

        const pelicula = await Pelicula.findByPk(id);
        

        return res.status(200).json({
            msg : `Registros afectados: ${peliculaActualizar}`,
            pelicula

        });



    } catch (error) {
        console.log(error)
    }
}


const borrarPelicula = async (req, res = response) => {

    const {id} = req.params;


    const peliculaBorrar = await Pelicula.destroy({
        where: {
            id: id
        }
    })

    return res.status(200).json({
        msg: `Pelicula con id ${id} borrada con éxito`
    });

}




module.exports = {
    obtenerPeliculas,
    crearPelicula,
    detallePelicula,
    actualizarPelicula,
    borrarPelicula,
}