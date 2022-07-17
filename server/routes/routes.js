const router = require("express").Router();

const usuarios = require('../controllers/usuario');
const loginuser = require('../controllers/logs');
const compra = require('../controllers/compraSinLogin');

// const { usuario } = registroUsuario
// const { logIn } = logs
// const { buscar } = estacionComprobacion

router.post('/usuario', usuarios.registroUsuario);
router.post('/logs', loginuser.logIn);
router.get('/compraSinLogin', compra.verInfoColeccionEstaciones);
//router.get('/buscar', buscar);

module.exports = router;


