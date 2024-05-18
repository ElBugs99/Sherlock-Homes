import React from 'react'
import './infoSection.css'
import FeaturedCard from '../../UI/FeaturedCard/FeaturedCard';


export default function InfoSection() {


  return (

    <section className='article'>
      <div className='infoSection'>

        <div className='feature-element'>
          <FeaturedCard />
        </div>

        <div className='feature-element'>
          <FeaturedCard />
        </div>
      
        <div className='feature-element'>
          <FeaturedCard />
        </div>

      </div>
    </section>
  )
}
