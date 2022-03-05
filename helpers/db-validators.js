const Pelicula = require("../models/pelicula");
const Personaje = require("../models/personaje");
const Usuario = require("../models/usuario");



const emailExiste = async (email = '') => {
    const emailExiste = await Usuario.findOne({
        where: {
            email : email
        }
    });
    if (emailExiste) {
        throw new Error(`El correo: ${email} ya existe`)
    }
}


const existeUsuario = async (nombre = '') => {
    const usuarioExiste = await Usuario.findOne({
        where: {
            nombre: nombre
        }
    });
    if(usuarioExiste){
        throw new Error(`El usuario ya existe`)
    }
}


const existePersonajeById = async (id) => {
    const existePersonaje = await Personaje.findByPk(id);
    if (!existePersonaje) {
        throw new Error(`El id no existe ${id}`);
    }
}

const existePeliculaById = async (id) => {
    const existePelicula = await Pelicula.findByPk(id);
    if (!existePelicula) {
        throw new Error(`El id no existe ${id}`);
    }
}

/**
 * Validar tablas permitidas
 */

 const tablasPermitidas = (tabla = '', tablas = []) => {

    const incluida = tablas.includes( tabla );
    if (!incluida){
        throw new Error(`La tabla ${tabla} no existe - ${tablas}`)
    }
    return true;
}



module.exports = {
    emailExiste,
    existeUsuario,
    existePersonajeById,
    existePeliculaById,
    tablasPermitidas
}