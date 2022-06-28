const express = require('express');

const app = express();
const http = require('http');

app.use(express.json());

app.use(require('./routes/routes'));
require('./database/mongodb');
require('./database/mysql');

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(
      `Servidor corriendo en el puerto ${PORT}`
    );
  });