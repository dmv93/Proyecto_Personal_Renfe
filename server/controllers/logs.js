const { compare } = require('../helpers/handleByCript');
const Usuario = require('../models/Usuario');

const log = {
    logIn: async (req, res) => {
        try {
            const { usuarioLogin, passwordLogin } = req.body;

            //esperamos a encontrar un usuario que coincida
            const usuario = await Usuario.findOne({
                where: { email: usuarioLogin }
            })

            if (usuario != null) {
                //encriptamos la contraseña
                const checkPassword = await compare(passwordLogin, usuario.pass);
                if (checkPassword) {
                    //res.send("Usuario y contraseña correctos")
                    console.log("Usuario y contraseña correctas")
                    res.send(true)

                } else {
                    //res.send("La contraseña o el usuario no son correctos")
                    console.log("Error a la hora de introducir los datos")
                    res.send(false)
                }
            } else {
                //res.send("Algo salio mal a la hora de introducir los datos")
                console.log("El usuario no puede logearse")
                res.send(false)
            }

        } catch (error) {
            //res.send("errrror")
        }


    }
}

module.exports = log