import React from 'react'
import './navBar.css';
import svgImage from '../../../assets/images/greenicon.svg';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';


export default function NavBar({ searchHidden }) {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

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
          <NavLink to='/' className='nav-option '>Inicio</NavLink >
          <NavLink to='/search' className='nav-option'>Búsqueda</NavLink>

          <div className="dropdown">
            <button onClick={handleOpen}>Aprende</button>
            {open ? (
              <ul className="menu">
                <li className="menu-item">
                  <NavLink to='/Info' className=''>Nosotros</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to='financiamiento' className=''>Financiamiento</NavLink>
                </li>
                <li className="menu-item">
                  <NavLink to='#' className=''>Mercado inmobiliario</NavLink>
                </li>
              </ul>
            ) : null}
          </div>

          <NavLink to='/login' className='nav-option'>Ingresar</NavLink>

        </div>
      </div>
    </nav>
  )
}
