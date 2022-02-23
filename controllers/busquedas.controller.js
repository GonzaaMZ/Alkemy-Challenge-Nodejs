const { response } = require("express");
const { Op } = require("sequelize");

const Pelicula = require("../models/pelicula");





const buscar = (req, res = response) => {

    const {name, genre, order} = req.query;
    
    if (name) {
        buscarNombre(name, res);
    }
    else if(genre){
        buscarGenero(genre, res);
    }
    else if (order){
        ordenar(order, res)
    }

}



const buscarNombre = async (name = '', res = response) => {

    const filtroNombre = await Pelicula.findAll({
        where: {
            titulo: {
            [Op.substring] : name
            } 
        }
    }) 

    res.json({
        results: filtroNombre
    })

}

const buscarGenero = async (genre = '', res = response) => {

    const filtroGenero = await Pelicula.findAll({
        where: {
            genero: {
                [Op.substring] : genre
            }
        }
    });

    res.json({
        results: filtroGenero
    })

}

const ordenar = async (order = '', res = response) => {

    switch (order) {
        case 'DESC':
            let ordenDesc = await Pelicula.findAll({
                order: [ ['createdAt', 'DESC'] ]
            })
            return res.json({
                results: ordenDesc
            })
            break;
        case 'ASC':
            let orden = await Pelicula.findAll({
                order: [ ['createdAt', 'ASC'] ]
            })
            return res.json({
                results: orden
            })
            break;
    }
    


}


module.exports = {
    buscar,
}