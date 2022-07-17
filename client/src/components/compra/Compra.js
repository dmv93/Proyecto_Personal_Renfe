// import { response } from "express";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";


const Compra = () => {

    const [datosEstaciones, setDatosEstaciones] = useState('');

    //  const navigate = useNavigate();

    // useEffect(() => {
    //     const requestOptions = {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(
    //             { datosEstaciones: datosEstaciones })
    //     };

    //     fetch("compraSinLogin")
    //     .then((response) => response.json())
    //     .then((res) => {
    //         setDatosEstaciones(res.message)
    //     })
    // },[])

    useEffect (() => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( {estaciones: datosEstaciones})
        }

        fetch("compraSinLogin")
            .then((response) => response.json())
            .then((res) =>  setDatosEstaciones(res) )

            if(datosEstaciones){
                console.log(datosEstaciones)
            }
    })



    return (
        <div className="body">
            <h2 id="cab">Compra de billetes</h2>
            <div className="cart">
                {datosEstaciones ? datosEstaciones.map((linea, index) => {
                    return(
                        <div key={index}>
                            <p> name: {linea.zona}</p>
                        </div>
                    )
                }
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


