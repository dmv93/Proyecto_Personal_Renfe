const Usuario = require("../models/Usuario");
const Tarjeta = require("../models/Tarjeta");

const compra = {


  comprobarCorreo: async (req, res) => {
    console.log(req.body)
    try {
      //
      const usuarioMail = req.body.usarioMail;
      console.log(usuarioMail);
      //comprobamos si el correo pasado coincide con alguno de la bbdd
      const usuario = await Usuario.findOne({
        where: { email: usuarioMail },
      });

      console.log(usuario.id)
      //comparamos a la fk de usuario en tarjeta con la anterior para ver si hay relacion
      const idfk = await Tarjeta.findOne({
        where: { fk_id: usuario.id },
      });
      //comprobamos que recibimos el campo caducidad
      console.log(idfk.caducidad)


      if (usuario != null) {
        console.log("Usuario encontrado");
        // devolvemos el campo
        res.json({ caducidad: idfk.caducidad, condicion: true })
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
      //buscamos encontrar un usuario que concuerde con el mail dado
      const usuario = await Usuario.findOne({
        where: { email: mail },
      });

      if (usuario != null) {
        if (duracion == "mensual") {
          console.log("Usuario encontrado");
          console.log(usuario.id);
          //para el mensual ponemos la fecha de alta y la de caducidad un mes mas tarde
          var fecha = new Date();
          console.log(fecha)
          var test = Date(fecha.setMonth(fecha.getMonth() + 1))
          console.log(test)

          const tarjetaMes = await Tarjeta.create({
            fk_id: usuario.id,
            duracion,
            zona,
            precio: "60€",
            alta: test,
            caducidad: fecha,
          });

        } else {

          //para el anual ponemos la fecha de alta y caducidad un año mas tarde
          var fecha = new Date();
          console.log(fecha)
          var test = Date(fecha.setFullYear(fecha.getFullYear() + 1))
          console.log(test);
          const tarjetaYear = await Tarjeta.create({
            fk_id: usuario.id,
            duracion,
            zona,
            precio: "700€",
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

  // imprimirCaducidad: async (req, res) => {
  //   try {

  //   } catch (error) {
  //     console.error("Ocurrio un error al buscar")
  //   }
  // }
};

module.exports = compra;
