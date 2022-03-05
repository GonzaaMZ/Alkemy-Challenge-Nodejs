const {Router} = require('express');
const {check} = require('express-validator');

const { guardarUsuario, login } = require('../controllers/auth.controller');
const { emailExiste, existeUsuario } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campo');


const router = Router();

router.post('/register',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre').custom( existeUsuario ),
    check('email').custom( emailExiste ).isEmail(),
    validarCampos
] , guardarUsuario)

router.get('/login',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El campo email es obligatorio').isEmail().not().isEmpty(),
    validarCampos
], login);

module.exports = router;