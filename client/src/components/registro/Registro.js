import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";

const Registro = () => {

    let navigate = useNavigate()

    const [name, setName] = useState("")
    const [lastName, setLastame] = useState("")
    const [mail, setMail] = useState("")
    const [phone, setPhone] = useState("")
    const [pass, setPass] = useState("")
    const [date, setDate] = useState("")
    const [okayRegister, setOkayRegister] = useState("")

    


const sendData = () => {

    let info = {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nombre: name,
            apellido: lastName,
            email: mail,
            telefono: phone,
            pass: pass,
            fecha_nacimiento: date
        })
    }

    console.log(info)
    fetch("usuario", info)
    .then((res) => res.json())
    .then((res) => {if (res) {
        localStorage.setItem('nombre',name);
        navigate('/login')
    }})

}

 useEffect(() => {
//     // okayRegister ? navigate("/login"): "";
     if(okayRegister){
         navigate('/login')
     }
 },[])

    return(
        <div className="body">
            <h2 id="cab">Registrar usuario nuevo</h2>
            <div className="formulario">
                <form className="form">
                    <label htmlFor="" id="">Nombre</label>
                    <br/>
                    <input type={"text"} id="campoNombre" name="nombre" placeholder="Introduce aquí tu nombre"
                    onChange={(e) => {setName(e.target.value)}}/>
                    <label htmlFor="" id="">Apellidos</label>
                    <input type={"text"} id="campoApellido" name="apellidos" placeholder="Introduce aquí tus apellidos"
                    onChange={(e) => {setLastame(e.target.value)}}/>
                    <label htmlFor="" id="">Correo electrónico</label>
                    <input type={"email"} id="campoEmail" name="mail" placeholder="Introduce aquí tu correo electrónico"
                    onChange={(e) => {setMail(e.target.value)}}/>
                    <label htmlFor="" id="">Teléfono</label>
                    <input type={"tel"} id="campoTelefono" name="telefono" placeholder="Introduce aquí tu número de teléfono"
                    onChange={(e) => {setPhone(e.target.value)}}/>
                    <label htmlFor="" id="">Contraseña</label>
                    <input type={"password"} id="campoNombre" name="nombre" placeholder="Introduce aquí tu nombre"
                    onChange={(e) => {setPass(e.target.value)}}/>
                    <label htmlFor="" id="">Fecha de nacimiento</label>
                    <input type={"date"} id="campoFecha" name="fecha" placeholder="Introduce aquí tu fecha de nacimiento en formato 1993-08-03"
                    onChange={(e) => {setDate(e.target.value)}}/>
                    <input type="button" className="boton" onClick={() => sendData()} value="Registrar"/>
                </form>
            </div>
        </div>
    )
}
export default Registro;