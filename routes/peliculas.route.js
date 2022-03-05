const {Router} = require('express');
const { check } = require('express-validator');

const { obtenerPeliculas, crearPelicula, detallePelicula, actualizarPelicula, borrarPelicula} = require('../controllers/peliculas.controller');

const { existePeliculaById } = require('../helpers/db-validators');

const { validarCampos } = require('../middlewares/validar-campo');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.get('/',[
   validarJWT,
   validarCampos
], obtenerPeliculas);

router.get('/:id',[
    validarJWT,
    check('id').custom( existePeliculaById ),
    validarCampos
], detallePelicula);

router.post('/',[
    validarJWT,
    check('titulo', 'El campo titulo es obligatorio').not().isEmpty(),
    validarCampos
], crearPelicula);

router.put('/:id',[
    validarJWT,
    check('titulo', 'El campo titulo es obligatorio').not().isEmpty(),
    check('id').custom( existePeliculaById ),
    validarCampos
], actualizarPelicula);

router.delete('/:id',[
    validarJWT,
    check('id').custom( existePeliculaById ),
    validarCampos
], borrarPelicula)



module.exports = router;