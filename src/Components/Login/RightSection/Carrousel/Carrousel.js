import React, { useEffect, useState } from 'react';
import './carrousel.css';
import house1 from '../../../../assets/images/house1.svg';
import house2 from '../../../../assets/images/house2.svg';
import house3 from '../../../../assets/images/house3.svg';
import house4 from '../../../../assets/images/house4.svg';
import house5 from '../../../../assets/images/house5.svg';
import house6 from '../../../../assets/images/house6.svg';
import house8 from '../../../../assets/images/house8.svg';

export default function Carrousel() {

  const [house, setHouse] = useState(1);

  const images = {
    1: house1,
    2: house2,
    3: house3,
    4: house5,
    5: house4,
    6: house6,
    7: house8,
  }

  useEffect(() => {

    const interval = setInterval(() => {

      if (house === 7) {
        setHouse(1);
      } else {
        setHouse((prevHouse) => prevHouse + 1);
      }

    }, 1000);

    return () => {
      clearInterval(interval);
    };

  }, );

  return (
    <div className='carrousel'>
      <div className='inner-carrousel'>
        <div className='carrousel-title'>Encuentra tu casa con nosotros.</div>
        <img className='carrousel-img' src={images[house]} alt='keys'/>
      </div>
    </div>
  )

}
