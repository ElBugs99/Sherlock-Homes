import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginForm.css';
import MessageModal from '../../../UI/MessageModal/MessageModal';

export default function LoginForm() {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: ''
  });

  const [serverSuccess, setServerSuccess] = useState(null);
  const [serverError, setServerError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(null);
  const [passError, setPassError] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const redirect = () => {
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerSuccess(null);
    setIsValidEmail(null);
    setServerError(null);
    setEmailError(null);
    setPassError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(loginUser.email);

    if (!loginUser.email) {
      setEmailError('¿Olvidas algo? ¡Tu email!');
      return;
    }

    if (!validEmail) {
      setIsValidEmail('Email no valido');
      return;
    }

    if (!loginUser.password) {
      setPassError('¿Olvidas algo? ¡Tu contraseña!');
      return;
    }

    try {
      console.log('Login user data:', loginUser);
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginUser.email,
          password: loginUser.password,
        }),
      });
      console.log('response', response);
      if (response.ok) {
        const data = await response.json();
        console.log('Server message:', data.message);

        localStorage.setItem('token', data.token);

        localStorage.setItem('user', JSON.stringify(data.user));

        setServerSuccess(data.message);
        setShowModal(true);
        redirect();
      } else {
        const data = await response.json();
        console.log('Server message:', data.message);
        setServerError(data.message);
        console.error('User login failed');
      }
    } catch (error) {
      console.error('Error logging in user:', error);
    }
  };

  return (
    <div className='login-form'>
      <form className='form-1' onSubmit={handleSubmit}>
        {showModal && <MessageModal message={'Has iniciado sesión correctamente'} isButtonVisible={false} />}
        <div className='form-group'>
          <div className='msg-container'>
            {serverSuccess && <div className='error-msg'>{serverSuccess}</div>}
            {serverError && <div className='error-msg'>{serverError}</div>}
          </div>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            onChange={handleOnChange}
            name='email'
            type='text'
            placeholder='Ingresa tu correo'
            spellCheck={false}
          />
        </div>
        <div className='msg-container'>
          {emailError && <div className='error-msg'>{emailError}</div>}
          {isValidEmail && <div className='error-msg'>{isValidEmail}</div>}
        </div>
        <div className='form-group'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            onChange={handleOnChange}
            name='password'
            type='password'
            placeholder='Ingresa tu contraseña'
          />
        </div>
        <div className='msg-container'>
          {passError && <div className='error-msg'>{passError}</div>}
        </div>
        <input className='submit' type='submit' value='Iniciar Sesión' />
      </form>
    </div>
  );
}
