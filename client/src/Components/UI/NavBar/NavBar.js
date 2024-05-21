import React, { useContext, useEffect, useState } from 'react';
import './navBar.css';
import svgImage from '../../../assets/images/greenicon.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import DropDown from '../DropDown/DropDown';
import { appContext } from '../../../appContext';

export default function NavBar({ searchHidden }) {

  const [ isLogged, setIsLogged ] = useState(false);
  const { user, setUser } = useContext(appContext);

  useEffect(() => {
    if (user) {
      setIsLogged(true);
    }
  }, [user])

  console.log('navbar user', user);

  const navigate = useNavigate();

  const handleDropDownOptionClick = (option) => {
    if (option === 'Ingresar') {
      navigate('/login', { replace: true });
    }
    
    if (option === 'Registrarse') {
      navigate('/registro', { replace: true });
    }
  };

  const handleDropDownOptionClick2 = (option) => {
    if (option === 'Nosotros') {
      window.location.href = '/Info';
    }
    
    if (option === 'Financiar') {
      window.location.href = '/financiamiento';
    }
  };

  const handleUserDropDownOption = (option) => {
    if (option === 'Cerrar sesión') {
      // Clear user data from local storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Update user state in context
      setUser(null);
      // Redirect to home page
      window.location.href = '/';
    } 
    
    /* if (option === 'Ver perfil') {
      navigate('/perfil');
    } */
  };

  // TODO make dropdown close when clicking outside

  return (
    <nav className='navBar'>
      <div className='nav-options-container'>
        <div className='nav-logo-container' onClick={() => navigate('/')}>
          <div className='nav-logo'>Sherlock Homes</div>
          <img className='nav-icon' src={svgImage} alt="SVG" />
        </div>

        <div className={searchHidden ? 'hidden' : ''}>
          <SearchBar />
        </div>
        <div className='nav-options'>
          <NavLink to='/search' className='nav-option'>Búsqueda</NavLink>

          <div className='nav-drop'>
            { isLogged ?
              <DropDown
                options={['Ver perfil', 'Cerrar sesión']}
                placeholder='Perfil'
                background='#264653'
                color='white'
                width='80px'
                callback={handleUserDropDownOption}
              />
              :
              <DropDown
                options={['Ingresar', 'Registrarse']}
                placeholder='Ingresa'
                background='#264653'
                color='white'
                width='80px'
                callback={handleDropDownOptionClick}
              />}
          </div>

          <DropDown
            options={['Nosotros', 'Financiar']}
            placeholder={'Aprende'}
            background='#264653'
            color='white'
            width='80px'
            callback={handleDropDownOptionClick2}
          />
        </div>
      </div>
    </nav>
  );
}
