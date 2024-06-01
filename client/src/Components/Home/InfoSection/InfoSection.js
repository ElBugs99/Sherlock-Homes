// InfoSection.js
import React, { useState, useEffect } from 'react';
import './infoSection.css';
import FeaturedCard from '../../UI/FeaturedCard/FeaturedCard';
import HorizontalScroller from '../../UI/Scroller/HorizontalScroller';


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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading properties</div>;
  }

  return (
    <section className='article'>
      <div className='infoSection'>

        {properties?.map((x, index) => (
          <div className='feature-element' key={index}>
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
        ))}

      </div>
    </section>
  );
}
