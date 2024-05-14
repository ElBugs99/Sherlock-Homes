import React from 'react'
import './promoSection.css'
import hanke from '../../../assets/images/Hankelogo.png'
import melej from '../../../assets/images/melej.png'
import Eh from '../../../assets/images/Ehlogo.png'




export default function PromoSection() {
  return (
    <div className='promoSection'>
      <div promo-title>
       <h4>Nuestros Asociados</h4>
      </div>
      
      <div className='inmobiliarias apareciendo'>

        <div className='card'>
          <a href='https://www.melej.cl/' target='blank'>
         <img className='imgCard'src={melej} alt='hanke'/>
         </a>
          
          <h3>Melej</h3>
          <p>Conoce nuestra amplia oferta de propiedades en la V región.</p>
        </div>

        <div className='card'>
          <a href='https://www.hankerojas.cl/' target='blank'>
         <img className='imgCard' src={hanke} alt='hanke'/>
         </a>
          <h4>Hanke & Rojas Propiedades</h4>
          <p>Encuentra tu hogar ideal en la V región con nosotros.</p>
        </div>

        <div className='card'>
          <a href='https://www.ehpropiedades.cl/' target='blanck'>
         <img className='Ehlogo' src={Eh} alt='hanke'/>
         </a>
          <h4>Ehrenfeld Propiedades</h4>
          <p>Somos expertos en propiedades de la V región. ¡Conócenos!</p>
        </div>

      </div>
      <a  href="*"  >Todos Nuestros Asociados</a>
    </div>
  )
}
