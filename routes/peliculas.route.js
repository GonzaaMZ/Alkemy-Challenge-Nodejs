const {Router} = require('express');
const { obtenerPeliculas, crearPelicula, detallePelicula, actualizarPelicula, borrarPelicula, buscarPelicula } = require('../controllers/peliculas.controller');


const router = Router();

router.get('/', obtenerPeliculas);

router.get('/:id', detallePelicula);

router.post('/', crearPelicula);

router.put('/:id', actualizarPelicula);

router.delete('/:id', borrarPelicula)





module.exports = router;