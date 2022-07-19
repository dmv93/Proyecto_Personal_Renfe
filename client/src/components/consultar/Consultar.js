import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Consulta = () => {

    let navigate = useNavigate();

    const [mail, setMail] = useState("");
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [tarjeta, setTarjeta] = useState("");

    const comprobar = () => {
        let comprobacion = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                usarioMail: mail,
            }),
        };

        console.log(comprobacion)

        fetch("comprobarCorreo")
            .then((res) => res.json())
            .then((res) => console.log(res))
            //meter aqui el res
    }

    useEffect(() => {
        setNombreUsuario(localStorage.getItem("nombre"));
    }, []);

    return (
        <div className="body">
            <div className="carCon">
                {nombreUsuario ? (
                    <h2 className="cab">Bienvenido {nombreUsuario}</h2>
                ) : (
                    <h2 className="cab">Consultar saldo tarjeta Renfe</h2>
                )}
            </div>
            <div className="contCon">
                <label htmlFor="labMail" id="labMail" name="labMail">
                    Correo electrónico
                </label>
                <input
                    type="mail"
                    id="campoMail"
                    name="campoMail"
                    placeholder="Introduce tu correo"
                    onChange={(e) => {
                        setMail(e.target.value);
                    }}
                />
                <br />
                <input
                    type={"button"}
                    onClick={() => comprobar()}
                    className="boton"
                    value="Consultar saldo"
                />

                <div className="resCon">
                    <p>La caducidad de tu tarjeta vence el {tarjeta}</p>
                </div>
            </div>
        </div>
    )

}

export default Consulta;