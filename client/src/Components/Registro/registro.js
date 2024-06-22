import React, { useState, useEffect } from 'react';
import './registro.css';
import Carrousel from '../Login/RightSection/Carrousel/Carrousel';
import svgImage from '../../assets/images/greenicon.svg';
import { IoHome } from 'react-icons/io5';

export default function Registro() {
  const [registerUser, setRegisterUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    termsAndConditions: false
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);
  const [serverSuccess, setServerSucces] = useState(null);

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegisterUser((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!registerUser.username) {
      newErrors.username = 'Este campo no puede estar vacío';
    } else if (registerUser.username.length < 4 || registerUser.username.length > 10) {
      newErrors.username = 'Debe tener entre 4 y 10 caracteres';
    } else if (!/^(?=.*[0-9])[a-zA-Z0-9]{4,}$/.test(registerUser.username)) {
      newErrors.username = 'Debe contener por lo menos un número';
    }

    if (!registerUser.email) {
      newErrors.email = 'Este campo no puede estar vacío';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(registerUser.email)) {
      newErrors.email = 'Debe ser un correo electrónico válido';
    }

    if (!registerUser.password) {
      newErrors.password = 'Este campo no puede estar vacío';
    } else if (
      registerUser.password.length < 5 ||
      !/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(registerUser.password)
    ) {
      newErrors.password = 'Debe tener más de 5 caracteres, una mayúscula y un número';
    }

    if (registerUser.password2 !== registerUser.password) {
      newErrors.password2 = 'Las contraseñas no coinciden';
    }

    if (!registerUser.termsAndConditions) {
      newErrors.termsAndConditions = 'Debe aceptar los términos y condiciones';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //TODO agregar spinner mientras se valida si usuario existe

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError(null); // Reset server error before validation

    if (validate()) {
      try {
        const response = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registerUser),
        });
        const data = await response.json();

        if (response.ok) {
          console.log('User registration successful');
          setServerSucces(data.success);
          //TODO Handle success, redirect user to dashboard
        } else {
          console.log('data', data);
          console.log('data.errors', data.errors);
          console.error('User registration failed');
          setServerError(data.errors);
        }
      } catch (error) {
        console.error('Error registering user:', error);
        setServerError([{ message: 'Internal server error' }]);
      }
    }
  };

  useEffect(() => {
    console.log(registerUser);
  }, [registerUser]);

  return (
    <div className="registro-form">
      <form className="left-section" onSubmit={handleSubmit}>
        <a href="/" className="back-button">
          <IoHome />
        </a>
        <div className="header">
          <div className="header-title">Regístrate en</div>
          <div className="company-name">
            <div className="sherlock">Sherlock Homes</div>
            <div>
              <img className="icon" src={svgImage} alt="SVG" />
            </div>
          </div>
        </div>

        <div className="registro-form-datos">
          <div>
            <h4 className="Titulo">Datos de Usuario</h4>
            <>
              {serverSuccess &&
                <div className='server-success'>
                  {serverSuccess.map((x, i) => (<p key={i}>{x.message}</p>))}
                </div>}
            </>
            {serverError && (
              <div className="server-error">
                {serverError.map((error, index) => (
                  <p key={index}>{error.message}</p>
                ))}
              </div>
            )}
            <div>

            </div>
            <div >
                <input
                className="form-input-rg"
                placeholder="Nombre Usuario"
                type="text"
                name="username"
                value={registerUser.username}
                onChange={handleOnChange}
                />
                <div className="validacion">
                  {errors.username && <p>{errors.username}</p>}
                </div>
            </div>
            
          </div>
          <div>
            <input
              className="form-input-rg"
              placeholder="Correo"
              type="text"
              name="email"
              value={registerUser.email}
              onChange={handleOnChange}
            />
            <div className="validacion">
              {errors.email && <p>{errors.email}</p>}
            </div>
          </div>
          <div>
            <input
              className="form-input-rg"
              placeholder="Contraseña"
              type="password"
              name="password"
              value={registerUser.password}
              onChange={handleOnChange}
            />
            <div className="validacion">
              {errors.password && <p>{errors.password}</p>}
            </div>
          </div>
          <div>
            <input
              className="form-input-rg"
              placeholder="Repite la contraseña"
              type="password"
              name="password2"
              value={registerUser.password2}
              onChange={handleOnChange}
            />
            <div className="validacion">
              {errors.password2 && <p>{errors.password2}</p>}
            </div>
          </div>
          <div>
            <label className="Titulo">
              Acepta los Términos y Condiciones
              <input
                className="caja"
                type="checkbox"
                name="termsAndConditions"
                checked={registerUser.termsAndConditions}
                onChange={handleOnChange}
              />
            </label>
            <div className="validacion">
              {errors.termsAndConditions && <p>{errors.termsAndConditions}</p>}
            </div>
          </div>
        </div>
        <input className="submit-rg" type="submit" value="Enviar" />
        <a className="yatengoCuenta" href="/login">Ya tengo una cuenta</a>
        <a className='botonTerminosCondiciones' href="/terminoscondiciones">Terminos y Condiciones</a>
      </form>

      <div className="right-section-rg">
        <Carrousel />
      </div>
    </div>
  );
}
