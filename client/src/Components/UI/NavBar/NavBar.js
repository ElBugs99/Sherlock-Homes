import React from 'react'
import './navBar.css';
import svgImage from '../../../assets/images/greenicon.svg';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

export default function NavBar({searchHidden}) {

  return (
    <nav className='navBar'>
      <div className='nav-options-container'>
        <div className='nav-logo-container'>
          <div className='nav-logo'>Sherlock Homes</div>
          <img className='nav-icon' src={svgImage} alt="SVG" />
        </div>
        <div className={searchHidden? 'hidden' : ''}>
          <SearchBar />
        </div>
        <div className='nav-options'>
          <NavLink to='/' className='nav-option'>Home</NavLink >
          <NavLink to='/search' className='nav-option'>Search</NavLink>
          <NavLink to='/lol' className='nav-option'>option3</NavLink>
          <NavLink to='/login' className='nav-option'>Ingresar</NavLink>
        </div>
      </div>
    </nav>
  )
}
