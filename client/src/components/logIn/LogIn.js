import React, {useState, useEffect} from "react";

const Body = () => {

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");

const sendData = () => {

    let info = {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            usuarioLogin: mail,
            passwordLogin: pass,
        })
    }
    console.log(info);

    fetch("logs", info)
    .then((res) => res.json())
    .then((res) => console.log(res))
}
    return(
        <div className="body">
            <div className="cab">
                <h2 className="cab">Iniciar sesión</h2>
            </div>
            <div className="formulario">
                <form className="form">
                    <label htmlFor="usuario" id="usuario">Correo electrónico</label>
                    <br/>
                        <input type="mail" id="campoUsuario" name="nombre" placeholder="Introduce tu correo electrónico aquí"
                        onChange={(e) => {setMail(e.target.value)}}/>
                    <br/>
                    <label htmlFor="pass" id="pass">Contraseña</label>
                    <br/>
                        <input type="password" id="passUsuario" name="pass" placeholder="Introduce tu contraseña aquí" 
                        onChange={(e) => {setPass(e.target.value)}}/>
                    <p id="olvidar">¿Has olvidado tu contraseña?</p>
                    <input type="button"  className="boton" onClick={() => sendData()} value="Iniciar"/>
                </form>
            </div>
        </div>
    )
}
export default Body;