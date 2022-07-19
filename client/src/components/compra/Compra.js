// import { response } from "express";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";


const Compra = () => {

    const [datosEstaciones, setDatosEstaciones] = useState('');
    const [origen, setOrigen] = useState("");
    const [destino, setDestino] = useState("");
    const [precio, setPrecio] = useState("");
    const [viaje, setViaje] = useState();
    const [aviso, setAviso] = useState("");
    const [zona, setZona] = useState("");


    const sendData = () => {


        if (origen === destino) {
            console.log("Son iguales")
            setAviso("No puedes elegir la misma estación de origen y destino")
        } else {
            setAviso("")
        }

        if (viaje === "1") {
            console.log("vale ida")

        } else {
            console.log("vale vuelta")
        }

        //pasamos los valores de origen-destino-viaje(precio) para tratarlos
        let enviarCompra = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                origen,
                destino,
                viaje,
            }),
        };
        console.log(precio);
        console.log(enviarCompra);

        //si logra trabajar la promesa nos devuelve el objeto res con sus valores
        fetch("compraSinLogin", enviarCompra)
            .then((res) => res.json())
            .then((res) => (res))
    }

    //utilizamos el hook para cuando renderize nos devuelva datos de las estaciones de mongo
    useEffect(() => {
        fetch("compraSinLogin")
            .then((response) => response.json())
            .then((res) => {
                setDatosEstaciones(res)
            })
    }, []);


    return (
        <div className="body">
            <h2 id="cab">Compra de billetes  </h2>
            <div className="cart">
                <div className="estaciones">
                    <label htmlFor="origen" id="origen">Origen: </label>
                    <select className="origen" value={origen} onChange={(e) => setOrigen(e.target.value)}>
                        {datosEstaciones ? datosEstaciones.map((linea, index) =>
                            <option key={index}>{linea.estacion}</option>
                        ) : ""}
                    </select>
                    <label htmlFor="destino" id="destino">Destino: </label>
                    <select className="destino" value={destino} onChange={(e) => setDestino(e.target.value)}>
                        {datosEstaciones ? datosEstaciones.map((linea, index) =>
                            <option key={index}>{linea.estacion}</option>
                        ) : ""}
                    </select>
                    <label htmlFor="viaje" id="viaje">Viaje: </label>
                    <form className="form">
                        <div className="radio">
                            <label>
                                <input name="1" type="radio" value="0" onClick={(e) => setViaje("1.00€")} />
                                Ida
                            </label>
                            <label>
                                <input name="1" type="radio" value="1" onClick={(e) => setViaje("2.00€")} />
                                Ida y vuelta
                            </label>
                        </div>
                    </form>
                    <label htmlFor="precio" id="precio" onClick={(e) => setPrecio(e.target.value)}>Precio: {viaje}</label>
                    {/* {datosEstaciones ? datosEstaciones.map((linea, index) =>
                        <p key={{ index }}>{precio}</p>)
                        : ""} */}
                    <input type="button" className="boton" onClick={() => sendData()} value="Comprar" />
                    {aviso ? aviso : ""}
                </div>
            </div>
        </div>
    )
}

export default Compra;


