const sequelize = require('sequelize');
const Usuario = require('../models/Usuario');

const jwt = require("jsonwebtoken");
const sendMail = require("../Mail");
const { where } = require('sequelize');
const { encrypt } = require('../helpers/handleByCript');


const SECRET = "palabraSecreta";

const recovery = {

    
    user: async (req, res, next) => {
        try {
            let emailUser = req.body.email;
            //esperamos a que coincida los mail
            const user = await Usuario.findOne({
                where: { email: emailUser }
            });

            if (user != null) {
                //si hemos pasado la validacion del user introducimos en el payload el mail
                const payload = {
                    email: emailUser,
                };

                //guardamos en el toke el mail y la palabra secreta y le damos un limte de tiempo
                const token = jwt.sign(payload, SECRET, { expiresIn: "30m" });
                //introducimos todo en el link que recibimos por mail
                const link = `<a href="http://localhost:3000/recoveryPass/${emailUser}/${token}">Cambiar contraseña</a>`;
                //enviamos con la formula de from-asunto....
                sendMail("davidthebridge93@gmail.com", `${emailUser}`, "Recuperación de contraseña", `${link}`)
                //notificamos al usuario que vaya al mail
                res.json({ message: "Te mandamos un mail con los siguientes pasos" })
            } else {
                res.json({ message: "Usuario no encontrado" })
                console.error("No hemos podido hacer nada")
            }

        } catch (error) {
            console.error(error);
            res.status(500);
        }
    },




    checkUserPost: async (req, res) => {

        const { pass, email, token } = req.body;

        //tenemos que encontrar un usuario que concuerde
        let usuario = await Usuario.findOne({
            where: { email: email },
        })

        const passHass = await encrypt(pass)

        if (usuario.email == email) {
            console.log("Mail bien")

            try {
                const comprobar = jwt.verify(token, SECRET);
                //con el token recibido esperamos a actualizar la contraseña
                const cambiarPass = await Usuario.update({
                    pass: passHass
                },
                //si la id del mail recibido coinicde con el id de ese correo se hace el cambio
                    {
                        where: { id: usuario.id },
                    });
                    //enviamos mail d eocnfi de cambio de pass
                sendMail("davidthebridge93@gmail.com", `${email}`, "Cambio de la contraseña", "Contraseña cambiada")
                res.json({ message: "Cambio realizado" })


            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("Mail no concluyente")
            res.json({ message: "No podemos confirmar los datos proporcionados" })
        }
    },

    confirmUser: async (req, res) => {
        //obtenemos la info de los parametros que pasamos
        const { token, email } = req.params;
        console.log(req.params)
        //comparamos el mail con el recibido
        let result = await Usuario.findOne({
            where: { email: email },
        });

        if (result.email == email) {
            console.log("Email correcto")
        } else {
            console.error("Email incorrecto")
        }
        try {
            //token que pasamos para poder trabajar la pass
            const comprobar = jwt.verify(token, SECRET);
            res.json(window.location.assign("/recoverPass"),
                { email: email })
        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = recovery;