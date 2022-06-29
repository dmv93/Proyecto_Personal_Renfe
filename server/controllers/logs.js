const { compare } = require('../helpers/handleByCript');
const Usuario = require('../models/Usuario');

const log = {
    logIn: async (req, res) => {
        try {
            const { usuarioLogin, passwordLogin } = req.body;

            const usuario = await Usuario.findOne({
                where: { email: usuarioLogin }
            })

            //console.log(usuario)

            if (usuario != null) {
                const checkPassword = await compare(passwordLogin, usuario.pass);
                if (checkPassword) {
                    res.send("Usuario y contraseña correctos")
                } else {
                    res.send("La contraseña o el usuario no son correctos")
                }
            } else {
                res.send("Algo salio mal a la hora de introducir los datos")
            }

        } catch (error) {
            res.send("errrror")
        }


    }
}

module.exports = log