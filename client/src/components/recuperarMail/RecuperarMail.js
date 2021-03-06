import React, { useState, useEffect } from "react";

function RecuperarMail() {

    const [email, setMail] = useState("");
    const [message, setMessage] = useState("");

    const sendMail = () => {
        //pasamos el mail
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email }),
        };

        console.log(requestOptions);

        //esperamos a que nos devuelva la promesa que hay mail para enviar el mail
        fetch("recovery", requestOptions)
            .then((res) => res.json())
            .then((res) => {
                setMessage(res.message)
            })
    }

    return (
        <div className="body">
            <div className="cabMail">
                <h2 className="alertMail">{message ? message : "Insertar email para recuperar contraseña"}</h2>
                <div className="req">
                    <div className="formuMail">
                        <input onChange={(e) => setMail(e.target.value)} className="imput" type="email" name="email" id="email" placeholder="Email" required></input>
                        <br></br>
                        <button onClick={() => sendMail()} id="registrarUser" className="sad">Comprobar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecuperarMail;