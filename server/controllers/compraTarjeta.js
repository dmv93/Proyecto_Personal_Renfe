const Usuario = require("../models/Usuario");
const Tarjeta = require("../models/Tarjeta");

const compra = {
  comprobarCorreo: async (req, res) => {
    try {
      const { usuarioMail } = req.body;

      const usuario = await Usuario.findOne({
        where: { email: usuarioMail },
      });

      if (usuario != null) {
        console.log("Usuario encontrado");
        res.send(true);
      } else {
        console.log("Usuario desconocido");
        res.send(false);
      }
    } catch (error) {
      console.error("Ocurrio un error a la hora de intentar buscar el usuario");
    }
  },

  comprarTarjeta: async (req, res) => {
    try {
      const { duracion, zona, precio, mail } = req.body;
      const usuario = await Usuario.findOne({
        where: { email: mail },
      });

      if (usuario != null) {
        if (duracion == "mensual") {
          console.log("Usuario encontrado");
          console.log(usuario.id);
          var fecha = new Date();
          console.log(fecha)
          // fecha.setMonth(fecha.getMonth() + 1);
          var test =  Date(fecha.setMonth(fecha.getMonth() + 1))
          console.log(test)
          // console.log(fecha);
    
             const tarjetaMes = await Tarjeta.create({
              fk_id: usuario.id,
              duracion,
              zona,
              precio,
              alta: test,
              caducidad: fecha,
            });
            // console.log(fecha)
            // console.log(test)
        } else {

          var fecha = new Date();
          console.log(fecha)
          var test = Date(fecha.setFullYear(fecha.getFullYear() + 1))
          console.log(test);
          // fecha.setFullYear(fecha.getFullYear() + 1);
            const tarjetaYear = await Tarjeta.create({
              fk_id: usuario.id,
              duracion,
              zona,
              precio,
              alta: test,
              caducidad: fecha,
            });
        }

        res.send(true);
      } else {
        console.log("Usuario desconocido");
        res.send(false);
      }
    } catch (error) {
      console.error("Ocurrio un error a la hora de intentar buscar el usuario");
    }

    //   if (duracion != null && zona != null && precio != null) {
    //     console.log("Tarjeta registrada");
    //     console.log(tarjeta.toJSON());
    //     res.send(true);
    //   } else {
    //     console.log("Error en los datos");
    //     res.send(false);
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  },
};

module.exports = compra;
