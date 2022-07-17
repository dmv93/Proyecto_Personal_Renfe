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

            const user = await Usuario.findOne({
                where: { email: emailUser }
            });

            if (user != null) {
                const payload = {
                    email: emailUser,
                };

            const token = jwt.sign(payload, SECRET, { expiresIn: "30m" });
            const link = `<a href="http://localhost:3000/recoveryPass/${emailUser}/${token}">Cambiar contraseña</a>`;
            sendMail("davidthebridge93@gmail.com", `${emailUser}`, "Recuperación de contraseña", `${link}`)
            res.json({message: "Te mandamos un mail con los siguientes pasos"})
            } else {
                res.json({message: "Usuario no encontrado"})
                console.error("No hemos podido hacer nada")
            }

        } catch (error) {
            console.error(error);
            res.status(500);
        }
    },




    checkUserPost: async (req, res) => {

        const { pass, email, token } = req.body;

        let usuario = await Usuario.findOne({
            where: { email: email},
        })
        
        const passHass = await encrypt(pass)

        if(usuario.email == email){
            console.log("Mail bien")

            try {
                const comprobar = jwt.verify(token, SECRET);

                const cambiarPass = await Usuario.update({
                    pass: passHass
                },
                {
                    where: { id: usuario.id},
                });
                sendMail("davidthebridge93@gmail.com", `${email}`, "Cambio de la contraseña", "Contraseña cambiada")
                res.json({ message: "Cambio realizado"})


            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("Mail no concluyente")
            res.json({ message: "No podemos confirmar los datos proporcionados"})
        }
    },

    confirmUser: async (req, res) => {
        const { token, email } = req.params;
        console.log(req.params)

        let result = await Usuario.findOne({
            where: { email: email},
        });

        if (result.email == email) {
            console.log("Email correcto")
        } else {
            console.error("Email incorrecto")
        }
        try {
            const comprobar = jwt.verify(token, SECRET);
            res.json(window.location.assign("/recoverPass"),
            { email: email} )
        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = recovery;