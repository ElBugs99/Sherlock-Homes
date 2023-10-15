import React from 'react'
import './noMatch.css'
import img from '../../../assets/images/alien-obduction-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom'

export default function NoMatch() {

  const navigate = useNavigate();

  return (
    <div className='notFound'>
      <div className='numbers'>404</div>
      <div className='not-found-svg-container'>
        <img className='not-found-svg' src={img} alt='ufo' />
      </div>
      <div className='not-found-info'>Página no encontrada</div>
      <button onClick={() => navigate('/')}>Inicio</button>
    </div>
  )
}
