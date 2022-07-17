import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
    return (
        <div className="body">
            <h2 id="cab">Bienvenido a Renfe</h2>
            <main>
            <section className="cards">
                <div className="card">
                    <div className="card-image-container">
                        <Link to={"/compra"} id="imagenCompra">
                        <img src="/img/compraSencillo.webp" alt="Compra de billete sencillo"></img>
                        </Link>
                    </div>
                    <div className="card-content">
                        <p className="card-title">COMPRAR BILLETE</p>
                        <div className="card-info">
                            <p className="info-title">Billete sencillo para tu viaje en Renfe</p>
                            <p className="info-title">Compra de billetes sin necesidad de registro, rápido y cómodo</p>
                        </div>
                        <Link to={"/compra"} id="imagenCompra">
                        <button className="btn">Comprar</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="cards">
                <div className="card">
                    <div className="card-image-container">
                        <img src="/img/0ren.jpg" alt="Compra de billete sencillo"></img>
                    </div>
                    <div className="card-content">
                        <p className="card-title">COMPRAR TARJETA RENFE</p>
                        <div className="card-info">
                            <p className="info-title">Tarjeta Renfe de abono mensual/anual</p>
                            <p className="info-title">Con la tarjeta Renfe podrás viajar sin ningún tipo de restricción y aprovechandote de todos sus beneficios</p>
                        </div>
                        <button className="btn">Comprar</button>
                    </div>
                </div>
            </section>
            <section className="cards">
                <div className="card">
                    <div className="card-image-container">
                        <img src="/img/pagar.jpg" alt="Compra de billete sencillo" id="tarj"></img>
                    </div>
                    <div className="card-content">
                        <p className="card-title">CONSULTAR TARJETA</p>
                        <div className="card-info">
                            <p className="info-title">Consulta el saldo de tu tarjeta Renfe</p>
                            <p className="info-title">Desde aquí puedes consultar la caducidad de tu tarjeta Renfe para no quedarte sin el placer de viajar</p>
                        </div>
                        <button className="btn">Consultar</button>
                    </div>
                </div>
            </section>
            </main>
        </div>
    )
}
export default Body