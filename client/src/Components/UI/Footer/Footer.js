import React from 'react'
import './footer.css'
import fbI from '../../../assets/images/FacebookIcon.png';
import igI from '../../../assets/images/InstagramIcon.png';
import xI from '../../../assets/images/XIcon.png';
import logo from '../../../assets/images/LogoShH.png';

export default function Footer() {
  return (
    <div className='pageFooter'>
      <div className='grupo-1'>
        <div className='box'>
          <figure>
            <a href="/">
            <img className='logoimg' src={logo} alt="Sherlock Homes" />     
            </a>
          </figure>
        </div>
        <div className='box'>
          <h2>SOBRE NOSOTROS</h2>
          <p>
            Somos una página que se dedica a recopilar anuncios inmoviliarios
          </p>
          <p>
            Te ayudaremos a encontrar tu nuevo hogar
          </p>
        </div>
        <div className='box'>
          <h2>SIGUENOS EN:</h2>
          <div className="red-social">
            <a href="#" className="">
            <img className='rrss-icon' src={fbI} alt="Facebook" />  
            </a>
            <a href="#">
            <img className='rrss-icon' src={igI} alt="Instagram" />                
            </a>
            <a href="#">
            <img className='rrss-icon' src={xI} alt="X" />                
            </a>
          </div>
          <a className='botonTerminosCondiciones' href="/terminoscondiciones">
                    <button className='footerTyCButton'>
                    Terminos y Condiciones
                    </button>
                </a>
        </div>
      </div>
      <div className='grupo-2'>
        <b>® 2024, SherlockHomes SpA.</b>
        <div>Todos los derechos reservados.</div>
      </div>
    </div>
  )
}