import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

    const [nombreUsuario, setNombreUsuario] = useState("")
    const [nombreLog, setNombreLog] = useState("")

    useEffect(() => {
        setNombreUsuario(localStorage.getItem('nombre'))
    },[])



    return(
        <div className='navbar'>
            <section display="flex" className='sectionNavbar'>
                <div id='logoRenfe'>
                    <Link to={"/"} id='logoRenfe'>
                    <img src="/img/renfe-logo-blanco.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </Link>
                </div>
                <div className='itemsNav'> 
    {/* {nombreUsuario ? <h2 className="cab">Bienvenido {nombreUsuario}</h2>: <h2 className="cab">Iniciar sesión</h2>} */}
    {nombreUsuario ? <div><Link to={"/login"} id='ini'>Bienvenido {nombreUsuario}</Link>
        <Link to={"/"} id='out'>Salir</Link></div>
            : <div><Link to={"/login"} id='ini'>Iniciar sesión</Link>
                    <Link to={"/registro"} id='reg'>Registrarse</Link>
                        <Link to={"/compra"} id='com'>Compra</Link></div>}
                </div>
            </section>
        </div>
    );
}
export default Navbar