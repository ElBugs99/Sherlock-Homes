import React from 'react'
import './mundoinmob.css'
import Fondo from '../../assets/images/Fondo.jpg'
import Footer from '../UI/Footer/Footer';
import NavBar from '../UI/NavBar/NavBar'

export default function InfoPage() {
    return (
        <div className='mundoinmob-page'>
            <div className='navbar'>
                <NavBar searchHidden={true}/>
            </div>
            <div className='main-content'>
                <div className='background' style={{ backgroundImage: `url(${Fondo})` }}>
            </div>
                <div className='footer'>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}