import React from 'react'
import './infoPage.css'
import houseKeys from '../../assets/images/houseKeys.jpg'
import Fondo from '../../assets/images/Fondo.jpg'
import Footer from '../UI/Footer/Footer';
import NavBar from '../UI/NavBar/NavBar'

export default function InfoPage() {
    return (
        <div className='info-page'>
            <div className='navbar'>
                <NavBar searchHidden={true}/>
            </div>
            <div className='main-content'>
                <div className='background' style={{ backgroundImage: `url(${Fondo})` }}>
                    <div className='logo'>
                        <h1>Sherlock Homes</h1>
                    </div>
                    <div className='info-page-row'>
                    <div className='enunciado'>
                    <h3>Somos una plataforma que quiere ayudar a quienes buscan un hogar, ante la problematica que significa 
                        la gran variedad de páginas de anuncios inmobiliarios que hay en el mercado
                        intentando unificar los avisos de estas en una sola página, entregando datos relevantes al usuario y 
                        redireccionandolo a la página de origen del aviso que le interesa
                        </h3>                        
                    </div>
                    <div className='img-1'>
                        <img className='info-page-img' src={houseKeys} alt='keys' />
                    </div>          
                </div>
            </div>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
