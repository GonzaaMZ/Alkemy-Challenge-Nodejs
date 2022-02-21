const {Router} = require('express');
const { crearPersonaje } = require('../controllers/personajes.controller');

const router = Router();

router.post('/', crearPersonaje);


module.exports = router;
