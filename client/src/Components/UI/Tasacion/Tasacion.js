import React from "react";
import  './tasacion.css';
import Lottie from 'react-lottie';
import animationTasacion from '../../../assets/animation/Animation - tasacion.json'


export default function Tasacion(){


    const animationOptions = {
        loop: true,
        autoplay: true,
        animationData: animationTasacion,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

        return(
            <div className="Tasacion-box">
                
                <div className="Header-title-tasacion">
                    <h3>Tasador Online IA</h3>
                </div>

                <div className="animacionTasacion">
                <Lottie
                options={animationOptions}
                isClickToPauseDisabled={true}
                height={100}
                width={100}

                /> 
                </div>

                 
                
                <div className="Info-tasacion">
                    <ul>
                        <li className="lista-tasacion">
                            Completa los datos de la propiedad
                        </li>
                        <li className="lista-tasacion">
                            Completa tus datos personales
                        </li>
                        <li className="lista-tasacion">
                            Listo. Ahora podras ver el precio de venta sugerido por ReV, Algoritmo de IA
                        </li>
                    </ul>
                    <div className="boton-tasacion-aling">
                        <a href="https://houm.com/cl/algoritmo-precio" target="_blank" >
                            <button className="boton-tasacion">
                                
                                Ir al Tasador Online
                            </button>
                        </a>
                        
                    </div>
                    

                </div>


            </div>

            



        )


}