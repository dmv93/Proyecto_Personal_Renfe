import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/logIn/LogIn";
import Registro from "../components/registro/Registro";
import Compra from "../components/compra/Compra";
// import Consultar from "./Consultar";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Body from "../components/body/Body";

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
                {/* <Route path="/" element={<LandingPage />} /> */}
                {/* <Route path="/login" element={<LogIn />} /> */}
                {/* <Route path="/consultar" element={<Consultar />} /> */}
            </Routes>
            <Footer />
        </div>
        );
    }
}
export default Main;
