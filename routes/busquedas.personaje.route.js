const {Router} = require('express');
const { buscarPersonaje } = require('../controllers/buscar.personajes');

const router = Router();


router.get('/', buscarPersonaje)


module.exports = router;