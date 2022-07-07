import React from 'react';

import Main from "./components/Main";
//import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './components/navbar/navbar.css'
import './components/body/body.css'
import './components/footer/footer.css'
import './components/logIn/login.css'
import './components/registro/registro.css'

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
