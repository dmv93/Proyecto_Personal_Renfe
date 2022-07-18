import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

function RecuperarPass() {

    // let navigate = useNavigate("");

    const [pass, setPass] = useState("");
    const { email, token} = useParams();
    const [message, setMessage] = useState("");

    const cambiarPass = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, pass: pass, token: token}),
        };

        console.log(requestOptions)

        fetch("recoveryPass", requestOptions)
            .then((res) => res.json())
            .then((res) => {
                setMessage(res.message)
            })
    }

    return (
        <div className="body">
            <div className="cabPass">
                <h2 className="alertPass">{message ? message : "Recuperar contraseña"}</h2>
                <div className="req">
                    <div className="formuPass">
                            <input onChange={(e) => setPass(e.target.value)} className="imput" type="password" name="pass" id="pass" placeholder="contraseña" required></input>
                            <button onClick={() => cambiarPass()} id="registrarUser" className="submitBtn">CAMBIAR CONTRASEÑA</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default RecuperarPass;