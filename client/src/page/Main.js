import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/logIn/LogIn";
import Registro from "../components/registro/Registro";
import Compra from "../components/compra/Compra";
import Tarjeta from "../components/tarjeta/Tarjeta";
import Consultar from "../components/consultar/Consultar"
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Body from "../components/body/Body";
import RecuperarMail from "../components/recuperarMail/RecuperarMail";
import RecuperarPass from "../components/recuperarPass/RecuperarPass";

class Main extends Component {
    render() {
        return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/registro" element={<Registro />} />
                <Route path="/compra" element={<Compra />} />
                <Route path="/compraTarjeta" element={<Tarjeta />} />
                <Route path="/consultar" element={<Consultar />} />
                <Route path="/recuperarMail" element={<RecuperarMail />} />
                <Route path="/recoveryPass/:email/:token" element={<RecuperarPass />} />
            </Routes>
            <Footer />
        </div>
        );
    }
}
export default Main;
