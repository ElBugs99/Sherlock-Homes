import React from 'react'
import './exploreCityCard.css'

export default function ExploreCityCard({cityName, listings, image}) {
  return (
    <div className='Explore-city-card'>
      <img className='city-card-img' src={image} alt='city'/>
      <div className='city-card-title'>{cityName}</div>
      <div className='city-card-info'>Listados: {listings}</div>
    </div>
  )
}
