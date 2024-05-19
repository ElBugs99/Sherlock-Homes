import React, { useContext, useState, useEffect } from 'react';
import './loginForm.css';
import { LoginContext } from '../../LoginContext';

export default function LoginForm() {
  /* const user = useContext(LoginContext); */
  const [ loginUser, setLoginUser ] = useState({
    "email": "",
    "password": ""
  })
  

  const handleOnChange = (e) => {
    const {name, value} = e.target;

    setLoginUser((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    console.log(loginUser)
  },[loginUser])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Login user data:', loginUser);//TODO
      const response = await fetch('http://localhost:3001/login', {
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
        console.log('User registration successful');
        // Handle success, e.g., redirect user to dashboard
      } else {
        console.error('User registration failed');
        // Handle failure, e.g., display error message
      }
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error, e.g., display error message
    }
  };

  return (
    <div className='login-form'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            onChange={handleOnChange}
            name='email'
            type='text'
            placeholder='Ingresa tu correo'
            spellCheck={false}
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label'>Contraseña</label>
          <input
            className='form-input'
            onChange={handleOnChange}
            name='password'
            type='password'
            placeholder='Ingresa tu contraseña'
            spellCheck={false}
            required
          />
        </div>
        <input className='submit' type='submit' value='Iniciar Sesión' />
      </form>
    </div>
  );
}