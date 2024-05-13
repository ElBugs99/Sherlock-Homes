import React from 'react'
import './navBar.css';
import svgImage from '../../../assets/images/greenicon.svg';
import WhTriangle from '../../../assets/images/whitetriangle.png';
import loginIcon from '../../../assets/images/loginIcon.png';
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
        <div className={searchHidden ? 'hidden' : ''}>
          <SearchBar />
        </div>
        <div className='nav-options'>
          <NavLink to='/' className='nav-option'>Inicio</NavLink >
          <NavLink to='/search' className='nav-option'>Búsqueda</NavLink>
          <div className='nav-option'>
            <div className="dropdown">
              <button onClick={handleOpen}>
                <a>Guia
                <img className='whiteTriangle' src={WhTriangle} />
                </a>
              </button>
              {open ? (
                <ul className="menu">
                  <li className="menu-item">
                  <NavLink to='/Info' className=''>Nosotros</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to='#' className=''>Financiamiento Inmobiliario</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to='#' className=''>Mercado Inmobiliario</NavLink>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>


          <NavLink to='/login' className='nav-option'>
            Ingresar
            <img className='loginIcon' src={loginIcon} />
          </NavLink>

        </div>
      </div>
    </nav>
  )
}
