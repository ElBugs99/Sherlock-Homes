import React, { useContext, useEffect, useState } from 'react';
import './exploreHomes.css';
import { appContext } from "../../../appContext";
import ExploreCityCard from '../../UI/ExploreCityCard/ExploreCityCard';
import vina from '../../../assets/images/vina-noche.jpg';
import valparaiso from '../../../assets/images/Valparaíso.jpg';
import quilpue from '../../../assets/images/Quilpue.jpg';
import villa from '../../../assets/images/molino2.png';
import useFilter from '../../../hooks/useFilter';

export default function ExploreHomes() {
  const { user } = useContext(appContext);
  const { redirectByCity } = useFilter();
  const [cityCounts, setCityCounts] = useState({
    viña: 0,
    quilpue: 0,
    valparaiso: 0,
    'villa alemana': 0,
  });

  useEffect(() => {
    const fetchCityCounts = async () => {
      try {
        const response = await fetch('http://localhost:3001/cityCount');
        const data = await response.json();
        setCityCounts(data);
      } catch (error) {
        console.error('Error fetching city counts:', error);
      }
    };

    fetchCityCounts();
  }, []);

  return (
    <div className='explore-homes'>
      <div className='cities-container'>
        <div className='cities-title'>
          {user ? (
            <div className='welcome-msg'>
              <div className='welcome-msg-text'>
                Bienvenid@, {user.username}
              </div>
            </div>
          ) : 'Explora en tu ciudad'}
        </div>
        <div className='explore-cities apareciendo'>
          <ExploreCityCard
            cityName={'Viña del Mar'}
            listings={cityCounts['viña']}
            image={vina}
            cityValue={'viña'}
            onClick={() => redirectByCity('Viña')}
          />
          <ExploreCityCard
            cityName={'Valparaíso'}
            listings={cityCounts['valparaiso']}
            image={valparaiso}
            onClick={() => redirectByCity('Valparaíso')}
          />
          <ExploreCityCard
            cityName={'Quilpué'}
            listings={cityCounts['quilpue']}
            image={quilpue}
            onClick={() => redirectByCity('Quilpué')}
          />
          <ExploreCityCard
            cityName={'Villa Alemana'}
            listings={cityCounts['villa alemana']}
            image={villa}
            onClick={() => redirectByCity('Villa alemana')}
          />
        </div>
      </div>
    </div>
  )
}
