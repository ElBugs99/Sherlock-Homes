import React from 'react'
import './exploreCityCard.css'

export default function ExploreCityCard({cityName, listings, image}) {
  return (
    <div className='Explore-city-card'>
      <div className='city-card-title'>{cityName}</div>
      <div className='city-card-info'>{listings}</div>
    </div>
  )
}
