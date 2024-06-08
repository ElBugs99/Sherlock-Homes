import React, { useState } from 'react'
import './exploreCityCard.css'

export default function ExploreCityCard({ cityName, listings, image, onClick, value }) {

  const [ cityValue, setCityValue ] = useState(value);

  return (
    <div className='Explore-city-card' onClick={ onClick }>
      <img className='city-card-img' src={image} alt='city'/>
      <div className='city-card-letters'>
        <div className='city-card-title'>{cityName}</div>
        <div className='city-card-info'>Listados: {listings}</div>
      </div>
    </div>
  )
}
