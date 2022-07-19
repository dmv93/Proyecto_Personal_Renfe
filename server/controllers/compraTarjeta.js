const Usuario = require("../models/Usuario");
const Tarjeta = require("../models/Tarjeta");

const compra = {


  
  comprobarCorreo: async (req, res) => {
    console.log(req.body)
    try {
      const usuarioMail = req.body.usarioMail;
      console.log(usuarioMail);

      const usuario = await Usuario.findOne({
        where: { email: usuarioMail },
      });
      
      console.log(usuario.id)

      const idfk = await Tarjeta.findOne({
        where: { fk_id: usuario.id },
      });
      console.log(idfk.caducidad)


      if (usuario != null) {
        console.log("Usuario encontrado");
        // res.send(true);
        res.json({ caducidad: idfk.caducidad, condicion: true})
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
          var test = Date(fecha.setMonth(fecha.getMonth() + 1))
          console.log(test)

          const tarjetaMes = await Tarjeta.create({
            fk_id: usuario.id,
            duracion,
            zona,
            precio,
            alta: test,
            caducidad: fecha,
          });

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
  },

  imprimirCaducidad: async (req,res) => {
    try {
      
    } catch (error) {
      console.error("Ocurrio un error al buscar")
    }
  }
};

module.exports = compra;
