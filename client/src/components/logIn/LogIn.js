import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


const Login = () => {

    // let navigate = useNavigate()

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [nombreUsuario, setNombreUsuario] = useState("")

    const sendData = () => {

        let info = {

            //pasamos para el back el user y la pass para tratarla
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                usuarioLogin: mail,
                passwordLogin: pass,
            })
        }
        console.log(info);

        //esperamos que se cumpla la promera para si todo esta bien enviarlo a home
        fetch("logs", info)
            .then((res) => res.json())
            .then((res) => {
                if (res) {
                    localStorage.setItem('user', mail);
                    console.log(res)
                    if (nombreUsuario) {
                        // navigate('/')
                        window.location.assign("/")
                    }
                }
            })
    }

    useEffect(() => {
        if (nombreUsuario) {
            // navigate('/')
        }
    }, [])

    useEffect(() => {
        setNombreUsuario(localStorage.getItem('nombre'))
    }, [])
    return (
        <div className="body">
            <div className="cab">
                {nombreUsuario ? <h2 className="cab">Bienvenido {nombreUsuario}</h2> : <h2 className="cab">Iniciar sesión</h2>}
            </div>
            <div className="formulario">
                <form className="form">
                    <label htmlFor="usuario" id="usuario">Correo electrónico</label>
                    <br />
                    <input type="mail" id="campoUsuario" name="nombre" placeholder="Introduce tu correo electrónico aquí"
                        onChange={(e) => { setMail(e.target.value) }} />
                    <br />
                    <label htmlFor="pass" id="pass">Contraseña</label>
                    <br />
                    <input type="password" id="passUsuario" name="pass" placeholder="Introduce tu contraseña aquí"
                        onChange={(e) => { setPass(e.target.value) }} />
                    <Link to={"/recuperarMail"} id="recuperarText">
                        <h2 id="olvidar">¿Has olvidado tu contraseña?</h2>
                    </Link>
                    <input type="button" className="boton" onClick={() => sendData()} value="Iniciar" />
                </form>
            </div>
        </div>
    )
}
export default Login;