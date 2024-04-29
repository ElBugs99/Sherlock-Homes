import React from 'react'
import './infoPage.css'
import houseKeys from '../../assets/images/houseKeys.jpg'
import CiudadOpaca from '../../assets/images/CiudadOpaca.jpg'
import Footer from '../UI/Footer/Footer';
import NavBar from '../UI/NavBar/NavBar'

export default function InfoPage() {
    return (
        <div className='info-page'>
            <NavBar searchHidden={true}/>
            <div className='background' style={{ backgroundImage: `url(${CiudadOpaca})` }}>
                <div className='logo'>
                    <h1>Sherlock Homes</h1>
                </div>
                <div className='info-page-row'>
                    <div className='enunciado'>
                    <p>Somos una plataforma que quiere ayudar a quienes buscan un hogar, ante la problematica que significa 
                        la gran variedad de páginas de anuncios inmobiliarios que hay en el mercado
                        intentando unificar los avisos de estas en una sola página, entregando datos relevantes al usuario y 
                        redireccionandolo a la página de origen del aviso que le interesa
                        </p>                        
                    </div>          
                    <img className='info-page-img' src={houseKeys} alt='keys' />
                </div>
                <Footer/>
            </div>
        </div>
        
    )
}
