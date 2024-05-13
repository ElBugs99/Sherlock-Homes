import React from 'react';
import './finan.css';
import Footer from '../UI/Footer/Footer';
import houseKeys from '../../assets/images/houseKeys.jpg'
import NavBar from '../UI/NavBar/NavBar';

export default function InfoPage() {
  return (
    <div className='finan'>
      <NavBar searchHidden={true} />
      
      <div className='content'>
        <h2>Proyectos disponibles para subsidio habitacional</h2>
        <p>Otro párrafo debajo del contenido principal</p>
        <div className='image-with-button'>
        <img className='info-page-img' src={houseKeys} alt='keys' />
          <button className='green-button'>Botón Verde</button>
        </div>
      </div>
      <div className='content'>
        <h2>Proyectos disponibles para subsidio habitacional</h2>
        <p>Otro párrafo debajo del contenido principal</p>
        <div className='image-with-button'>
        <img className='info-page-img' src={houseKeys} alt='keys' />
          <button className='green-button'>Botón Verde</button>
        </div>
      </div>
      <div className='content'>
        <h2>Credito Hipotecario</h2>
        <p>Otro párrafo debajo del contenido principal</p>
        <div className='image-with-button'>
        <img className='info-page-img' src={houseKeys} alt='keys' />
          <button className='green-button'>Botón Verde</button>
        </div>
      </div>
      <Footer className='footer' />
    </div>
  );
}