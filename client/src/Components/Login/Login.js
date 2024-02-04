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

      const tallasOrdenadas = [];

      let lower = 6;

      const a = [];

      for (let value of arrayDeTallas) {

          //console.log('comparando talla: ' + value.toUpperCase());

          if (value.toUpperCase() in tallas) {

             // console.log(value + ' existe en el objeto tallas');
              a.push(value.toUpperCase());
              
              //console.log(a);

          };
          //console.log(talla + ' '+ tallas[talla]);
      }
      while ( a.length() > 0) {
        let talla;
        for (let value of a) {
        
          if (tallas[value] < lower){
            lower = tallas[value]
            talla = value
          }
          console.log(value);
        }
        tallasOrdenadas.push(talla)
        
      }
      
      //console.log(tallas["S"]);

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
