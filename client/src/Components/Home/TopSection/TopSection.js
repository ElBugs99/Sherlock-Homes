import React from 'react'
import './topSection.css'
import img from '../../../assets/images/longApartmen.jpg';

export default function TopSection() {
  return (
    <div className='topSection'>
      <div className='top-img-container'>
        <img className='top-img' src={img} alt='promo' />
        <div className='top-img-text'>Test text</div>
      </div>
    </div>
  )
}
