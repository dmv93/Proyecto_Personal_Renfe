// import { response } from "express";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";


const Compra = () => {

    const [datosEstaciones, setDatosEstaciones] = useState('');

    //  const navigate = useNavigate();
    useEffect(() => {
        fetch("compraSinLogin")
            .then((response) => response.json())
            .then((res) => {
                setDatosEstaciones(res)
                console.log(res.length)
            })
    }, []);

// {datosEstaciones.length}

    return (
        <div className="body">
            <h2 id="cab">Compra de billetes  </h2>
            <div className="cart">
                {datosEstaciones ? datosEstaciones.map((linea, index) =>   
                        <div key={index}>
                            <p> name: {linea.estacion}</p>
                        </div>
                    // <div key={index} className="contenedor">
                    //     <div>
                    //         <p className="test">{linea.lineas}</p>
                    //     </div>
                    // </div>
                    ) : ""}
            </div>
        </div>
    )
}

export default Compra;


