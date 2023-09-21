import React, { useContext, useEffect, useState } from 'react'
import './loginForm.css'
import { LoginContext } from '../../LoginContext'

export default function LoginForm() {

  const [user, setUser] = useState({
    'email': 'test',
    'password': 'passTest'
  })

  //const user = useContext(LoginContext);

  const handleOnChange = (e) => {
    const {name, value} = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    console.log(user)
  },[user])

  return (
    <div className='login-form'>
      <form className='form'>

        <div className='form-group'>
            <label className='form-label'>Email</label>
            <input className='form-input' onChange={handleOnChange} name='email' type='text' placeholder='Ingresa tu correo' spellCheck={false} />
        </div>

        <div className='form-group'>
            <label className='form-label'>Contraseña</label>
            <input className='form-input' onChange={handleOnChange} name='password' type='password' placeholder='Ingresa tu contraseña' spellCheck={false} />
        </div>

        <input className='submit' type='submit' value='Iniciar Sesión'/>
        <button onClick={(e) => {
          e.preventDefault(); console.log(user)}}>state</button>

      </form>
    </div>
  )
}
