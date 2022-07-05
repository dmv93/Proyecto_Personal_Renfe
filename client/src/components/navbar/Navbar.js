import React from 'react';

const Navbar = () => {
    return(
        <div className='navbar'>
            <section display="flex" className='sectionNavbar'>
                <div id='logoRenfe'>
                    <a href='/' className='item'>
                    <img src="/img/renfe-logo-blanco.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </a>
                </div>
                <div className='itemsNav'>
                <a href='/' id='ini'>Iniciar sesión</a>
                <a href='/' id='reg'>Registrarse</a>
                <a href='/' id='com'>Comprar</a>
                </div>
            </section>
        </div>
    );
}
export default Navbar