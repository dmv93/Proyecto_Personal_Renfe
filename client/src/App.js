import React from 'react';
import Main from './page/Main';
import { BrowserRouter } from 'react-router-dom';

import './components/navbar/navbar.css'
import './components/body/body.css'
import './components/footer/footer.css'
import './components/logIn/login.css'
import './components/registro/registro.css'
import './components/compra/compra.css'
import './components/tarjeta/tarjeta.css'
import './components/consultar/consultar.css'
import './components/recuperarMail/recuperar.css'
import './components/recuperarPass/recuperarPass.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
