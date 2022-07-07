const Usuario = require('../models/Usuario');
const { encrypt } = require('../helpers/handleByCript');

const usuarios = {
    registroUsuario: async (req, res) => {
        console.log(req.body)
        try {

            const {
                nombre,
                apellido,
                email,
                telefono,
                pass,
                fecha_nacimiento
            } = req.body

            const passwordHash = await encrypt(pass);

            if (nombre.match(/^[a-z ,.'-]+$/i) && apellido.match(/^[a-z ,.'-]+$/i) && email.match(/^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/)
                && telefono.match(/(6|7)([0-9]){8}$/) && fecha_nacimiento.match(/^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/)) {
                const usuario = await Usuario.create({
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    telefono: telefono,
                    pass: passwordHash,
                    fecha_nacimiento: fecha_nacimiento,
                });
                console.log(usuario.toJSON().id);
                console.log("Usuario registrado de manera correcta")
                res.send(true)
            } else {
                console.log('Datos invalidos a la hora de registrarse');
                res.send(false)
            }
        } catch (error) {
            console.error(error);
            res.status(500);
        } 
    }
}

module.exports = usuarios;
