import React from 'react'
import './infoPage.css'
import houseKeys from '../../assets/images/houseKeys.jpg'
import Fondo from '../../assets/images/Fondo.jpg'
import Footer from '../UI/Footer/Footer';
import NavBar from '../UI/NavBar/NavBar'
import { Fade } from "react-awesome-reveal";

export default function InfoPage() {
    return (
        <Fade>
            <div className="terminoscondiciones">
                <NavBar searchHidden={true} />

                <div className='header'>
                    <div className='encabezado'>
                        <h2 className="titulo">Sherlock Homes</h2>
                    </div>
                </div>
                <div
                    className='background'
                    style={{
                        backgroundImage: `url(${Fondo})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        backgroundBlendMode: 'overlay'
                    }}
                ></div>
                <div className='info-content'>
                    <div className='info'>
                        <h3 className='sub-seccion'>
                            ¿QUIENES SOMOS?
                        </h3>
                        <h1>
                            Somos una plataforma sin fines de lucro que quiere ayudar a quienes buscan un hogar, ante la problematica que significa
                            la gran variedad de páginas de anuncios inmobiliarios que hay en el mercado
                            intentamos unificar los avisos de estas en una sola página, entregando datos relevantes al usuario
                            redireccionandolo a la página de origen del aviso que le interesa además de entregar fuentes de información en asuntos importantes del mercado inmobiliario
                        </h1>

                        <img className='imgKeys' src={houseKeys} alt='img' />

                        <h1 className='h1vamos'>
                            Permitenos acompañarte y apoyarte mientras buscas en nuestro gran catalogo de recopilación tu próximo hogar
                        </h1>
                    </div>
                </div>
                <Footer />
            </div>
        </Fade>
    );
}




