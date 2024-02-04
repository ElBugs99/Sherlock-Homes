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

      //Orden de las tallas
      const tallas =
      {
          S: 1,
          M: 2,
          L: 3,
          XL: 4,
          XXL: 5
      };

      const upperCaseTallas = arrayDeTallas.map(x => x.toUpperCase())

      const ordenadas = [];

      for ( let key in tallas) {

        if ( upperCaseTallas.includes(key) ){
          ordenadas.push(key);
        }
      }
      return ordenadas;
  };


  const array = ['a', 'b', 'c'];

  array.splice()




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
