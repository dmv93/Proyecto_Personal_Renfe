const express = require('express')
const bodyParser = require('body-parser');

const registros = require('../controllers/registro');
const logs = require('../controllers/logs')

const router = express.Router();

const { registroUsuario } = registros;
const { logIn } = logs

router.post('/registro', registroUsuario);
router.post('/logs', logIn);

module.exports = router;


