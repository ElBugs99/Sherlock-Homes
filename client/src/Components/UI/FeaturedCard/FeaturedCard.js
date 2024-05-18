import React from 'react'
import casa1 from '../../../assets/images/Ehcasa1.jpeg'
import { FaHeart } from 'react-icons/fa';
import { FaShare } from "react-icons/fa";
import { PiToiletLight } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { TbMeterSquare } from "react-icons/tb";
import './featuredCard.css'

export default function FeaturedCard() {
  return (
    <div>
      <div className='featured-card'>
          <h3 className='Venta'>Oferta Destacada</h3>

          <div className='iconos'>
            <FaHeart className='like' />
            <FaShare className='Compartir' />
          </div>


          <center>
            <img className='casas' src={casa1} alt='Los Alemendros' />
          </center>
          <p className='descripcion'>Los Almendros. Reñaca. Propiedad con 1680 m2 de terreno.</p>
          <h3>UF 19.990</h3>

          <p className='cantidad'>
            <PiToiletLight /> 3 Baños
          </p>
          <p className='cantidad'>
            <IoBedOutline /> 4 Dormitorios
          </p>
          <p className='cantidad'>
            <TbMeterSquare /> 1680 m2
          </p>

          <div className='botonOferta'>
            <a href='*'>
              <button className='btn-oferta'>Ir a la oferta</button>
            </a>
            <button className='btn-comparar'>Comparar</button>
          </div>

        </div>
    </div>
  )
}
