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
                    <a href='https://www.instagram.com/renfe/?hl=es' className='item'>
                        <img src="/img/insta.png" href="" className='logoRenfe' display="flex" alt="logo"></img>
                    </a>
                    <a href='https://www.facebook.com/Renfe/' className='item'>
                        <img src="/img/facebook.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </a>
                    <a href='https://twitter.com/Renfe' className='item'>
                        <img src="/img/twitter.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </a>
                    <a href='https://www.youtube.com/user/renfe' className='item'>
                        <img src="/img/youtube.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </a>
                    <a href='https://www.tiktok.com/@renfe?lang=es' className='item'>
                        <img src="/img/tiktok.png" className='logoRenfe' display="flex" alt="logo"></img>
                    </a>
                </div>
            </section>
        </div>
    );
}
export default Footer