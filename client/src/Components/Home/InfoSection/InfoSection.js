import React, { useState, useEffect, useContext } from 'react'
import './infoSection.css'
import FeaturedCard from '../../UI/FeaturedCard/FeaturedCard';
import { appContext } from '../../../appContext';


export default function InfoSection() {

  const [properties, setProperties] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);


  const fetchHouses = async () => {
    try {
      const response = await fetch(`http://localhost:3001/featured`);

      if (!response.ok) {
        throw new Error('House not found');
      }

      const data = await response.json();
      setProperties(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchHouses();
  }, []);


  const cards = properties?.map(x => {
    return (
      <div className='feature-element'>
      <FeaturedCard 
        title={x.title}
        price={x.price}
        bathrooms={x.bathrooms}
        bedrooms={x.bedrooms}
        sqft={x.sqft}
        img={x.media[0]}
        onClick={() => window.open(`/Property/${x.id}`, '_blank')}
      />
    </div>
    )
    
  })

  return (

    <section className='article'>
      <div className='infoSection'>

      {cards}

      </div>
    </section>
  )
}
