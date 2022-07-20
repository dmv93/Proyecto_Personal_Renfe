import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Consulta = () => {

    let navigate = useNavigate();

    const [mail, setMail] = useState("");
    const [nombreUsuario, setNombreUsuario] = useState("");
    const [tarjeta, setTarjeta] = useState("");
    const [duracion, setDuracion] = useState("")

    const comprobar = () => {
        let comprobacion = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                usarioMail: mail,
            }),
        };

        //la promesa nos devuelve el campo caducidad del usuario
        fetch("comprobarCorreo", comprobacion)
            .then((res) => res.json())
            .then((res) => { setDuracion(res.caducidad) })
    }


    const senData = () => {
        let caducidad = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                duracion,
            }),
        };

        console.log(caducidad);
        //sin funcionamiento aun bueno
        fetch("obtenerCaducidad", caducidad)
            .then((res) => res.json())
            .then((res) => {
                console.log("")
            })
    }


    //obtenemos el nombre del local y cambiamos el estado
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
                <div className="concon">
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
                </div>
                <br />
                <input
                    type={"button"}
                    onClick={() => comprobar()}
                    className="boton"
                    value="Consultar saldo"
                />

                <div className="resCon">
                    <p>La caducidad de tu tarjeta vence el {duracion ? duracion : ""}</p>
                </div>
            </div>
        </div>
    )

}

export default Consulta;