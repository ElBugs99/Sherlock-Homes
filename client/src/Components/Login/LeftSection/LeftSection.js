import React from 'react'
import './leftSection.css'
import LoginForm from './LoginForm/LoginForm';
import svgImage from '../../../assets/images/greenicon.svg';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoHome } from 'react-icons/io5';

export default function LeftSection() {
  return (
    <div className='left-section'>
      <div className='header'>
        <div className='header-title'>Inicia Sesión en</div>
        <div className='company-name'>
          <div className='sherlock'>Sherlock Homes</div>
          <div>
            <img className='icon' src={svgImage} alt="SVG" />
          </div>
        </div>
        <div className='boton-inicio'>
          <a className='ao' href='/'>
          <IoHome />
          </a>
         
        </div>
      </div>
      <LoginForm />
      <div className='link-registro'>
        <a className='link-a' href='registro'>Registrarse <FaArrowRightLong className='' /></a>
      </div>
    </div>
  )
}
