import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <section display="flex" className='sectionFooter'>
                <div id='logoEUES'>
                    <a href='/' className='item'>
                        <img src="/img/logo-gob.jpeg" className='logoEUES' display="flex" alt="logo"></img>
                    </a>
                </div>
                <div className='logoRenfe'>
                    <a href='/' className='item'>
                        <img src="/img/renfe-logo-blanco.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </a>
                </div>
                <div id='logosGenereal'>
                    <a href='/' className='item'>
                        <img src="/img/insta.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </a>
                    <a href='/' className='item'>
                        <img src="/img/facebook.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </a>
                    <a href='/' className='item'>
                        <img src="/img/twitter.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </a>
                    <a href='/' className='item'>
                        <img src="/img/youtube.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </a>
                    <a href='/' className='item'>
                        <img src="/img/tiktok.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </a>
                </div>
            </section>
        </div>
    );
}
export default Footer