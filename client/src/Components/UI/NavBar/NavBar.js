import React from 'react';
import './navBar.css';
import svgImage from '../../../assets/images/greenicon.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import DropDown from '../DropDown/DropDown';

export default function NavBar({ searchHidden }) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();


  const handleDropDownOptionClick = (option) => {
    if (option === 'Ingresar') {
      navigate('/login');
    }
    
    if (option === 'Registrarse') {
      navigate('/registro');
    }
  };

  const handleDropDownOptionClick2 = (option) => {
    if (option === 'Nosotros') {
      navigate('/Info');
    }
    
    if (option === 'Financiar') {
      navigate('/financiamiento');
    }
  };


  //TODO make dropdown close when clicking outside

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
            <DropDown
              options={['Ingresar', 'Registrarse']}
              placeholder={'Ingresa'}
              background='#264653'
              color='white'
              width='80px'
              callback={handleDropDownOptionClick}
            />
          </div>
          
          {/* <NavLink to='/' className='nav-option'>Inicio</NavLink > */}

          <DropDown
              options={['Nosotros', 'Financiar', ]} //TODO agregar Mercado inmobiliario
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
