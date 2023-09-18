import React, { useState } from 'react'
import './login.css'
import LeftSection from './LeftSection/LeftSection'
import RightSection from './RightSection/RightSection'
import { LoginContext } from './LoginContext'

export default function Login() {

  const [loginUser, setLoginUser] = useState({
    email: 'test@gmail.com',
    password: 'passTest'
  })

  return (    
    <div className='login'>
      <LoginContext.Provider value={loginUser}>
        <LeftSection />
        <RightSection />
      </LoginContext.Provider>
    </div>
  )
}
