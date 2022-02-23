const {Router} = require('express');

const { crearPersonaje, obtenerPersonajes, detallePersonaje, actualizarPersonaje, borrarPersonaje } = require('../controllers/personajes.controller');

const router = Router();

router.get('/', obtenerPersonajes)

router.get('/:id', detallePersonaje)

router.post('/', crearPersonaje);

router.put('/:id', actualizarPersonaje);

router.delete('/:id', borrarPersonaje)

module.exports = router;