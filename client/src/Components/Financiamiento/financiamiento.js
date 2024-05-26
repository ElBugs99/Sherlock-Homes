import React from 'react';
import './financiamiento.css'
import NavBar from "../UI/NavBar/NavBar";
import Footer from "../UI/Footer/Footer";
import YoutubeVideo from '../UI/Youtube/youtube';
import educFinanciera from '../../assets/images/bancoFinanza.webp'



export default function financiamiento() {




    return (
        <div className="financiamiento">
            <NavBar searchHidden={true} />

            <div className='header'>
                <div className='financiamineto-info'>
                    <h2 className="titulo">Como empezar tu ahorro para la vivienda</h2>

                    <hr></hr>


                </div>

            </div>
            <div className='f-content'>
            <img className='imgFinanciemaiento' src={educFinanciera} alt='educacionFinanciera' />
            <div className='info'>
                <p>Si estás pensando en comprar tu casa propia, el primer paso que debes dar es abrir una cuenta de ahorro para la vivienda. Esta cuenta te permitirá acumular dinero para el pie de tu propiedad y también postular a los subsidios habitacionales que ofrece el Ministerio de Vivienda y Urbanismo (MINVU).
                    En este artículo te explicaremos cómo abrir una cuenta de ahorro para la vivienda en BancoEstado, el banco preferido por los chilenos para este fin. Además, te mostraremos un video que resume los beneficios y requisitos de esta cuenta.
                </p>
                <h3 className='sub-titulo-info'>
                    ¿Qué es una cuenta de ahorro para la vivienda?
                </h3>
                <p>
                    Una cuenta de ahorro para la vivienda es una cuenta unipersonal que se reajusta según la variación de la UF, por lo que el dinero no pierde valor con el aumento de la inflación. Además, permite ganar intereses y reajustes anualmente por los depósitos mantenidos por 90 días o más en la cuenta.

                    Esta cuenta es un requisito indispensable para postular al subsidio habitacional del D.S. Nº 40 de 2004 del MINVU, que entrega una ayuda estatal para comprar viviendas de hasta 2.200 UF (o 2.600 UF en algunas regiones) nuevas o usadas, o para construir en sitio propio.

                    Para postular a este subsidio, debes tener como mínimo un año de ahorro documentado por el banco donde abriste la cuenta y un monto mínimo de ahorro en tu cuenta dependiendo del tramo del subsidio, entre 30 y 80 UF.
                </p>
                <h3 className='sub-titulo-info'>
                    ¿Cómo abrir una cuenta de ahorro para la vivienda en BancoEstado?
                </h3>
                <p>
                    Para abrir una cuenta de ahorro para la vivienda en BancoEstado necesitas cumplir los siguientes requisitos:
                </p>

                <p>
                    - Ser persona natural
                </p>

                <p>
                    - Ser mayor de 18 años
                </p>

                <p>
                    - No tener otra cuenta de ahorro para la vivienda en el sistema financiero
                </p>

                <p>
                    - Realizar un depósito de apertura de al menos 0,5 UF
                </p>

                <p>
                    - Documentar origen de fondos cuando corresponda
                </p>

                <h3>
                    Además, debes seguir estos pasos:
                </h3>
                <p>
                    1. Descarga la app móvil de BancoEstado en tu celular y regístrate con tus datos personales.
                </p>
                <p>
                    2. Ingresa a la opción "Abrir Cuenta" y selecciona "Cuenta Ahorro Vivienda".
                </p>
                <p>
                    3. Completa el formulario con tus datos personales, laborales y financieros.
                </p>
                <p>
                    4. Firma el contrato digitalmente y confirma tu correo electrónico.
                </p>
                <p>
                    5. Realiza el depósito inicial desde otra cuenta bancaria o con tarjeta de crédito o débito.
                </p>
                <p>
                    6. Recibe tu tarjeta de cajero automático en tu domicilio o retírala en una sucursal.
                </p>
                <p>
                    ¡Listo! Ya tienes tu cuenta de ahorro para la vivienda activa y puedes comenzar a ahorrar para tu sueño.
                </p>

                <div className='video'>
                    <YoutubeVideo videoId={"iThpiAwfMpw"} />
                </div>

            </div>
            </div>
            









            <Footer />
        </div>







    );
}