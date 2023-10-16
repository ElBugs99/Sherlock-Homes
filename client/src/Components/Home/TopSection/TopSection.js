import React from 'react'
import './topSection.css'
import homeVideo from '../../../assets/videos/home-video.mp4';
import search from '../../../assets/images/white-search-icon.svg';

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
        <form className='top-form'>
          <input className='top-input' spellCheck='false' />
          <button className='search-btn'><img src={search} className='search-icon' alt='search' /></button>
        </form>
        <div className='top-img-text'>Encuentra tu nuevo hogar.</div>
      </div>
    </div>
  )
}
