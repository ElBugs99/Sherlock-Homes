import React from 'react'
import './loginForm.css'

export default function LoginForm() {
  return (
    <div className='login-form'>
      <form className='form'>

        <div className='form-group'>
            <label className='form-label'>Email</label>
            <input className='form-input' type='text' placeholder='Ingresa tu correo' spellCheck={false} />
        </div>

        <div className='form-group'>
            <label className='form-label'>Contraseña</label>
            <input className='form-input' type='password' placeholder='Ingresa tu contraseña' spellCheck={false} />
        </div>

        <input className='submit' type='submit' value='Iniciar Sesión'/>

      </form>
    </div>
  )
}
