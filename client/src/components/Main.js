import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn";
import Registrarse from "./pages/Registrarse";
import Compra from "./pages/Compra";
import Consultar from "./pages/Consultar";

class Main extends Component {
    render() {
        return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/registro" element={<Registrarse />} />
                <Route path="/compra" element={<Compra />} />
                <Route path="/consultar" element={<Consultar />} />
            </Routes>
        </div>
        );
    }
}
export default Main;
