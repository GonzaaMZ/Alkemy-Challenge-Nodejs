const {Router} = require('express');
const { check } = require('express-validator');

const { crearPersonaje, obtenerPersonajes, detallePersonaje, actualizarPersonaje, borrarPersonaje } = require('../controllers/personajes.controller');
const { existePersonajeById } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campo');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/', [
    validarJWT,
    validarCampos
], obtenerPersonajes)

router.get('/:id', [
    validarJWT,
    check('id').custom( existePersonajeById ),
    validarCampos
], detallePersonaje)

router.post('/',[
    validarJWT,
    check('nombre', 'El campo nombre es obligatorio').not().isEmpty(),
    check('edad', 'El campo edad es obligatorio').not().isEmpty(),
    validarCampos
], crearPersonaje);

router.put('/:id',[
    validarJWT,
    check('nombre', 'El campo nombre es obligatorio').not().isEmpty(),
    check('edad', 'El campo edad es obligatorio').not().isEmpty(),
    check('id').custom( existePersonajeById ),
    validarCampos
], actualizarPersonaje);

router.delete('/:id',[
    validarJWT,
    check('id').custom( existePersonajeById ),
    validarCampos
], borrarPersonaje)

module.exports = router;