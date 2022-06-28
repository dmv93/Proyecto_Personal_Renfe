const express = require('express')
const bodyParser = require('body-parser');

const registros = require('../controllers/registro');

const router = express.Router();

const { registroUsuario } = registros;

router.post('/registro', registroUsuario);

module.exports = router;


