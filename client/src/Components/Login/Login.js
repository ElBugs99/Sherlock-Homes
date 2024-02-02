import React, { useState } from 'react'
import './login.css'
import LeftSection from './LeftSection/LeftSection'
import RightSection from './RightSection/RightSection'
import { LoginContext } from './LoginContext'

export default function Login() {


    //hacer una funcion que diga si los parentesis de apertura y cierre son correctos, se espera recibir un String

  //ejemplos de malos
  /* 
  ([ )]
  )()
  (]][)
  ( ) () //Extra
  */




  //hacer un paginador, poner el numero del elemento, paginar de 2 en 2
  //ordenar nombres que tienen numeros romanos en base al numero
  //ordernar las tallas, de mayor a menor, ordenar las tallas que se entregen, pueden no ser todas

  const ordenarTallas = ( arrayDeTallas ) => {

      const tallas =
      {
          S: 1,
          M: 2,
          L: 3,
          XL: 4,
          XXL: 5
      };

      for (let talla in tallas) {

          //console.log(tallas[talla]);

          for (let value of arrayDeTallas) {

              console.log(value);

          }

          //console.log(talla + ' '+ tallas[talla]);

      }

      //console.log(tallas["S"]);

  };

  const [loginUser, setLoginUser] = useState({
    "email": "",
    "password": ""
  })

  return (    
    <div className='login'>
      <LoginContext.Provider value={{loginUser, setLoginUser}}>
        <LeftSection />
        <RightSection />
      </LoginContext.Provider>
    </div>
  )
}
