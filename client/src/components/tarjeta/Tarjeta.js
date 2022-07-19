import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tarjeta = () => {
  let navigate = useNavigate();

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [duracion, setDuracion] = useState("mensual");
  //   const [duracion, setDuracion] = useState("");
  const [zona, setZona] = useState("A");
  const [precio, setPrecio] = useState("60€");
  const [mail, setMail] = useState("");

  //   function cambioDia(e) {
  //     setDia(e.target.value);
  //   }

  //   function cambioZona(e) {
  //     setZona(e.target.value);
  //   }

  const comprobarMail = () => {
    let comprobacion = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      usarioMail: mail,
      }),
    };
    console.log(comprobacion);

    fetch("comprobarCorreo")
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const sendData = () => {

    let enviarTarjeta = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        duracion,
        zona,
        precio,
        mail,
      }),
    };

    console.log(enviarTarjeta)

    fetch("guardarTarjeta",enviarTarjeta)
        .then((res) => res.json())
        .then((res) => {if(res) {
            navigate('/')
        }})
  };

  useEffect(() => {
    setNombreUsuario(localStorage.getItem("nombre"));
  }, []);

  return (
    <div className="body">
      <div className="cabTar">
        {nombreUsuario ? (
          <h2 className="cab">Bienvenido {nombreUsuario}</h2>
        ) : (
          <h2 className="cab">Comprar tarjeta Renfe</h2>
        )}
      </div>
      <div className="contTar">
        <form className="formTar">
          <div className="correo">
            <label htmlFor="labMail" id="labMail" name="labMail">
              Correo electrónico
            </label>
            <input
              type="mail"
              id="campoMail"
              name="campoMail"
              placeholder="Introduce correo con el que te registraste"
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
          </div>
          <div className="selectAbono">
            <label htmlFor="labAbono" id="labAbono" name="labAbono">
              Duración del abono
            </label>
            <select
              value={duracion}
              onChange={(e) => setDuracion(e.target.value)}
            >
              <option>mensual</option>
              <option>anual</option>
            </select>
          </div>
          <div className="selectZona">
            <label htmlFor="labZona" id="labZona" name="labZona">
              Zona de viaje
            </label>
            <select value={zona} onChange={(e) => setZona(e.target.value)}>
              <option>A</option>
              <option>B</option>
            </select>
          </div>

          <p>Precio: {precio}</p>
          <input
            type={"button"}
            onClick={() => sendData()}
            className="boton"
            value="Comprar"
          />
        </form>
      </div>
    </div>
  );
};

export default Tarjeta;
