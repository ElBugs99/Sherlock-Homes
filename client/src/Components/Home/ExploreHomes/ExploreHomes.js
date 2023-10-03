import React from 'react'
import './exploreHomes.css'
import ExploreCityCard from '../../UI/ExploreCityCard/ExploreCityCard'

export default function ExploreHomes() {
  return (
    <div className='explore-homes'>
      <div className='cities-container'>
        <div className='cities-title'>
            Explora en tu ciudad
        </div>
        <div className='explore-cities'>
            <ExploreCityCard cityName={'Viña del Mar'} listings={50} />
            <ExploreCityCard cityName={'Viña del Mar'} listings={50} />
            <ExploreCityCard cityName={'Viña del Mar'} listings={50} />
            <ExploreCityCard cityName={'Viña del Mar'} listings={50} />
        </div>
      </div>
    </div>
  )
}
