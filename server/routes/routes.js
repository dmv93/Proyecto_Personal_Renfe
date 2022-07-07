const router = require("express").Router();

const usuarios = require('../controllers/usuario');
const loginuser = require('../controllers/logs')

// const { usuario } = registroUsuario
// const { logIn } = logs
// const { buscar } = estacionComprobacion

router.post('/usuario', usuarios.registroUsuario);
router.post('/logs', loginuser.logIn);
//router.get('/buscar', buscar);

module.exports = router;


