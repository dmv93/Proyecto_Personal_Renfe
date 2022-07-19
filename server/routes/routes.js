const router = require("express").Router();

const usuarios = require('../controllers/usuario');
const loginuser = require('../controllers/logs');
const compra = require('../controllers/compraSinLogin');
const recoveryMail = require('../controllers/recoveryMail');
const compraTarjeta = require('../controllers/compraTarjeta')


router.post('/usuario', usuarios.registroUsuario);
router.post('/logs', loginuser.logIn);      //NO LLAMARLO ASI PORQUE ES PARA LOS AVISOS
router.get('/compraSinLogin', compra.verInfoColeccionEstaciones);
router.post('/recovery', recoveryMail.user);
router.get("/recoveryPass/:email/:token", recoveryMail.confirmUser);
router.post("/recoveryPass/:email/:token", recoveryMail.checkUserPost);
router.post("/comprobarCorreo", compraTarjeta.comprobarCorreo)
router.post("/guardarTarjeta", compraTarjeta.comprarTarjeta);
router.post("/compraSinLogin", compra.guardarDatosCompra);
router.post("/obtenerCaducidad", compraTarjeta.imprimirCaducidad);

module.exports = router;


