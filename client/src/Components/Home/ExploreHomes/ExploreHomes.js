import React, { useContext, useEffect, useState } from 'react';
import './exploreHomes.css';
import { appContext } from "../../../appContext";
import ExploreCityCard from '../../UI/ExploreCityCard/ExploreCityCard';
import vina from '../../../assets/images/vina-noche.jpg';
import santiago from '../../../assets/images/santiago.jpg';
import serena from '../../../assets/images/Faro_La_Serena_451.jpg';
import valdivia from '../../../assets/images/valdivia.jpg';

export default function ExploreHomes() {

  const { user } = useContext(appContext);

  return (
    <div className='explore-homes'>
      <div className='cities-container'>
        <div className='cities-title'>
            {user ? <div>Bienvenid@, {user.username}</div> : 'Explora en tu ciudad'}
        </div>
        <div className='explore-cities apareciendo'>
            <ExploreCityCard cityName={'Viña del Mar'} listings={50} image={vina} />
            <ExploreCityCard cityName={'Santiago'} listings={50} image={santiago}/>
            <ExploreCityCard cityName={'La Serena'} listings={50} image={serena}/>
            <ExploreCityCard cityName={'Valdivia'} listings={50} image={valdivia}/>
        </div>
      </div>
    </div>
  )
}
