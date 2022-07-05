const express = require('express')
const bodyParser = require('body-parser');

const registros = require('../controllers/registro');
const logs = require('../controllers/logs')
const estacionComprobacion = require('../controllers/estacionComprobacion')

const router = express.Router();

const { registroUsuario } = registros
const { logIn } = logs
const { buscar } = estacionComprobacion

router.post('/registro', registroUsuario);
router.post('/logs', logIn);
router.get('/buscar', buscar);

module.exports = router;


