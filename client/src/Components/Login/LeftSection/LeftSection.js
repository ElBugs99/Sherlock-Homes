import React from 'react'
import './leftSection.css'
import LoginForm from './LoginForm/LoginForm';
import svgImage from '../../../assets/images/greenicon.svg';

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
      </div>
      <LoginForm />
      <div>
        <a href='registro'>Registrarse</a>
      </div>
    </div>
  )
}
