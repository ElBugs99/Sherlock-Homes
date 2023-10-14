import React from 'react'
import './noMatch.css'
import img from '../../../assets/images/alien-obduction-svgrepo-com.svg'

export default function NoMatch() {
  return (
    <div className='notFound'>
      <div className='not-found-svg-container'>
        <img className='not-found-svg' src={img} alt='ufo' />
      </div>
     Error 404
     <div>página no encontrada</div>
    </div>
  )
}
