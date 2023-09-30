import React from 'react'
import './navBar.css';

export default function NavBar() {
  return (
    <div className='navBar'>
      <div className='nav-options-container'>
        <div className='nav-logo-container'>
          <div className='nav-logo'>Sherlock Homes</div>
        </div>
        <div className='nav-options'>
          <div className='nav-option'>option1</div>
          <div className='nav-option'>option2</div>
          <div className='nav-option'>option3</div>
          <div className='nav-option'>option4</div>
        </div>
      </div>
    </div>
  )
}
