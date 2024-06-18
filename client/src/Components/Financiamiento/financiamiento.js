import React from 'react';
import './financiamiento.css'
import NavBar from "../UI/NavBar/NavBar";
import Footer from "../UI/Footer/Footer";
import YoutubeVideo from '../UI/Youtube/youtube';
import educFinanciera from '../../assets/images/bancoFinanza.webp'
import { Bounce } from "react-awesome-reveal";
import Fondo from '../../assets/images/Fondo.jpg'


export default function financiamiento() {

    return (
        <div className="financiamiento">
            <NavBar searchHidden={true} />
            <div
                className='background'
                style={{
                    backgroundImage: `url(${Fondo})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    backgroundBlendMode: 'overlay'
                }}
            ></div>

            <div className='header'>
                <div className='financiamineto-info'>
                    <div className="financiamineto-titulo">CÓMO COMENZAR TU AHORRO PARA LA VIVIENDA</div>
                    <hr></hr>
                </div>
            </div>
            <div className='f-content'>
                <div className='info'>
                    <h1>Si estás pensando en comprar tu casa propia, el primer paso que debes dar es abrir una cuenta de ahorro para la vivienda. Esta cuenta te permitirá acumular dinero para el pie de tu propiedad y también postular a los subsidios habitacionales que ofrece el Ministerio de Vivienda y Urbanismo (MINVU).
                        En este artículo te explicaremos cómo abrir una cuenta de ahorro para la vivienda en BancoEstado, el banco preferido por los chilenos para este fin. Además, te mostraremos un video que resume los beneficios y requisitos de esta cuenta.
                    </h1>
                    <div className='video'>
                        <YoutubeVideo videoId={"iThpiAwfMpw"} />
                    </div>
                    <div className='financiamineto-subtitulo'>
                        ¿Qué es una cuenta de ahorro para la vivienda?
                    </div>
                    <h1>
                        Una cuenta de ahorro para la vivienda es una cuenta unipersonal que se reajusta según la variación de la UF, por lo que el dinero no pierde valor con el aumento de la inflación. Además, permite ganar intereses y reajustes anualmente por los depósitos mantenidos por 90 días o más en la cuenta.

                        Esta cuenta es un requisito indispensable para postular al subsidio habitacional del D.S. Nº 40 de 2004 del MINVU, que entrega una ayuda estatal para comprar viviendas de hasta 2.200 UF (o 2.600 UF en algunas regiones) nuevas o usadas, o para construir en sitio propio.

                        Para postular a este subsidio, debes tener como mínimo un año de ahorro documentado por el banco donde abriste la cuenta y un monto mínimo de ahorro en tu cuenta dependiendo del tramo del subsidio, entre 30 y 80 UF.
                    </h1>
                    <h3 className='sub-titulo-info'>
                        ¿Cómo abrir una cuenta de ahorro para la vivienda en BancoEstado?
                    </h3>
                    <h1>
                        Para abrir una cuenta de ahorro para la vivienda en BancoEstado necesitas cumplir los siguientes requisitos:
                    </h1>

                    <h1>
                        - Ser persona natural
                    </h1>

                    <h1>
                        - Ser mayor de 18 años
                    </h1>

                    <h1>
                        - No tener otra cuenta de ahorro para la vivienda en el sistema financiero
                    </h1>

                    <h1>
                        - Realizar un depósito de apertura de al menos 0,5 UF
                    </h1>

                    <h1>
                        - Documentar origen de fondos cuando corresponda
                    </h1>

                    <h3>
                        Además, debes seguir estos pasos:
                    </h3>
                    <h1>
                        1. Descarga la app móvil de BancoEstado en tu celular y regístrate con tus datos personales.
                    </h1>
                    <h1>
                        2. Ingresa a la opción "Abrir Cuenta" y selecciona "Cuenta Ahorro Vivienda".
                    </h1>
                    <h1>
                        3. Completa el formulario con tus datos personales, laborales y financieros.
                    </h1>
                    <h1>
                        4. Firma el contrato digitalmente y confirma tu correo electrónico.
                    </h1>
                    <h1>
                        5. Realiza el depósito inicial desde otra cuenta bancaria o con tarjeta de crédito o débito.
                    </h1>
                    <h1>
                        6. Recibe tu tarjeta de cajero automático en tu domicilio o retírala en una sucursal.
                    </h1>
                    <h1>
                        ¡Listo! Ya tienes tu cuenta de ahorro para la vivienda activa y puedes comenzar a ahorrar para tu sueño.
                    </h1>
                    <h3 className='sub-titulo-info'>
                        Si tienes más dudas respecto al tema te ofrecemos los siguientes enlaces:
                    </h3>

                    <h3 className='sub-titulo-info'>
                        Ministerio de Vivienda y Urbanismo:
                    </h3>
                    <Bounce>
                        <a className='boton' href="https://www.chileatiende.gob.cl/instituciones/AP000">
                            <button className='finan-button'>
                                MINVU
                            </button>
                        </a>
                    </Bounce>
                    <h3 className='sub-titulo-info'>
                        Simula un credito hipotecario:
                    </h3>
                    <Bounce>
                        <a className='boton' href="https://www.comparaonline.cl/credito-hipotecario">
                            <button className='finan-button'>
                                Simula un Credito
                            </button>
                        </a>
                    </Bounce>
                    <h3 className='sub-titulo-info'>
                        Creditos hipotecarios Banco Estado:
                    </h3>
                    <Bounce>
                        <a className='boton' href="https://www.bancoestado.cl/content/bancoestado-public/cl/es/home/home/productos-/creditos/creditos-hipotecarios.html#/">
                            <button className='finan-button'>
                                Banco Estado
                            </button>
                        </a>
                    </Bounce>
                </div>
            </div>
            <Footer />
        </div>
    );
}