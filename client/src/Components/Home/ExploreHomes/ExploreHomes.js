import React, { useContext } from 'react';
import './exploreHomes.css';
import { appContext } from "../../../appContext";
import ExploreCityCard from '../../UI/ExploreCityCard/ExploreCityCard';
import vina from '../../../assets/images/vina-noche.jpg';
import valparaiso from '../../../assets/images/Valparaíso.jpg';
import quilpue from '../../../assets/images/Quilpue.jpg';
import villa from '../../../assets/images/molino2.png';

export default function ExploreHomes() {

  const { user } = useContext(appContext);

  return (
    <div className='explore-homes'>
      <div className='cities-container'>
        <div className='cities-title'>
            {user ? <div className='welcome-msg'>
                      <div className='welcome-msg-text'>
                        Bienvenid@, {user.username}
                      </div>
                    </div>
                    : 'Explora en tu ciudad'}
        </div>
        <div className='explore-cities apareciendo'>
            <ExploreCityCard cityName={'Viña del Mar'} listings={50} image={vina} />
            <ExploreCityCard cityName={'Valparaíso'} listings={50} image={valparaiso}/>
            <ExploreCityCard cityName={'Quilpué'} listings={50} image={quilpue}/>
            <ExploreCityCard cityName={'Villa alemana'} listings={50} image={villa}/>
        </div>
      </div>
    </div>
  )
}
