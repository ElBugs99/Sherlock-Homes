import React from 'react'
import './topSection.css'
import homeVideo from '../../../assets/videos/home-video.mp4';

export default function TopSection() {
  return (
    <div className='topSection'>
      <div className='top-overlay'></div>
      <div className='top-img-container'>
        <video className='top-img' autoPlay loop muted>
          <source src={homeVideo} type="video/mp4" />
          {/* Add additional source elements for other formats (WebM, Ogg) */}
          Your browser does not support the video tag.
        </video>
        {/* <img className='top-img' src={img} alt='promo' /> */}
        <div className='top-img-text'>Test text</div>
      </div>
    </div>
  )
}
