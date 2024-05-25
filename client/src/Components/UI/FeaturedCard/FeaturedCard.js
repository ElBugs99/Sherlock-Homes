import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { FaShare } from "react-icons/fa";
import { PiToiletLight } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { TbMeterSquare } from "react-icons/tb";
import { addDotsToNumber } from '../../../utils/numberUtils';
import './featuredCard.css'

export default function FeaturedCard({ title, price, bathrooms, bedrooms, sqft, img, onClick }) {
  return (
    <div>
      <div className='featured-card' onClick={ onClick }>
          <h3 className='Venta'>Oferta Destacada</h3>

          <div className='iconos'>
            <FaHeart className='like' />
            <FaShare className='Compartir' />
          </div>


          <center>
            <img className='casas' src={ img } alt='Los Alemendros' />
          </center>
          <p className='descripcion'>{ title }</p>
          <h3>$ { addDotsToNumber(price) }</h3>

          <p className='cantidad'>
            <PiToiletLight /> { bathrooms } Baños
          </p>
          <p className='cantidad'>
            <IoBedOutline /> { bedrooms } Dormitorios
          </p>
          <p className='cantidad'>
            <TbMeterSquare /> { sqft } m2
          </p>

          <div className='botonOferta'>
            
          </div>

        </div>
    </div>
  )
}
