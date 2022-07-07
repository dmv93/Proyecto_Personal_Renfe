import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LogIn from "./pages/LogIn";

class Main extends Component {
    render() {
        return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LogIn />} />
            </Routes>
        </div>
        );
    }
}
export default Main;
