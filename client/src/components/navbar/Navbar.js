import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className='navbar'>
            <section display="flex" className='sectionNavbar'>
                <div id='logoRenfe'>
                    <Link to={"/"} id='logoRenfe'>
                    <img src="/img/renfe-logo-blanco.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </Link>
                </div>
                <div className='itemsNav'>
                <Link to={"/login"} id='ini'>Iniciar sesión</Link>
                <Link to={"/registro"} id='reg'>Registrarse</Link>
                <Link to={"/compra"} id='com'>Compra</Link>
                </div>
            </section>
        </div>
    );
}
export default Navbar