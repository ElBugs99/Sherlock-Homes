import React from 'react'
import './exploreHomes.css'
import ExploreCityCard from '../../UI/ExploreCityCard/ExploreCityCard'
import vina from '../../../assets/images/vina.jpg'
import santiago from '../../../assets/images/santiago.jpg'
import serena from '../../../assets/images/la-serena.jpg'

export default function ExploreHomes() {
  return (
    <div className='explore-homes'>
      <div className='cities-container'>
        <div className='cities-title'>
            Explora en tu ciudad
        </div>
        <div className='explore-cities'>
            <ExploreCityCard cityName={'Viña del Mar'} listings={50} image={vina} />
            <ExploreCityCard cityName={'Santiago'} listings={50} image={santiago}/>
            <ExploreCityCard cityName={'Viña del Mar'} listings={50} image={serena}/>
            <ExploreCityCard cityName={'Viña del Mar'} listings={50} image={vina}/>
        </div>
      </div>
    </div>
  )
}
