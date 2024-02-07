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

/*     const validarParentesis = (cadena) => {

      const aperturas = [];

      //const {name, phone, email} = clients.user;

      const cadenaArray = [...cadena];

      const parentesis = {
        '(': ')',
        '[': ']',
        '{': '}'
      }

      console.log(cadenaArray);

      for (let value of cadenaArray){

          //verificar si es de cierre o apertura
          if ( value in parentesis ) {
            console.log(value + 'Es de apertura');
            aperturas.push(value);
          }else{
            console.log(value + " es de cierre");
            //if ( aperturas.length() === 0 ) return false;

            let ultimaApertura = aperturas[aperturas.length - 1 ];

            if (parentesis[ultimaApertura] === value) {
              console.log(ultimaApertura + 'Le correponde ' + parentesis[ultimaApertura]);
              aperturas.pop();
            } else {
              console.log('no le corresponde: ')
              //return false;
            }
          }
        
      }
      if (aperturas.length > 0){
        console.log('cerraron todos los parantesis');
      }
      console.log(aperturas);
    }


  const verificarParentesis = (cadena) => {

    const cadenaArray = [...cadena];
    const aperturas = [];
    const parentesis = {
      '(': ')',
      '[': ']',
      '{': '}'
    }

    for (let value of cadenaArray) {
      
      //es de apertura
      if (value in parentesis) {
        console.log(value + 'es de apertura');
        aperturas.push(value);
      }else{
        //es de cierre
        console.log(value + 'es de cierre');
        if ( aperturas.length === 0 ) return false;
        
        const ultimoParentesis = aperturas[ aperturas.length - 1];

        if (value === parentesis[ultimoParentesis]) {
          console.log('corresponden: ' + ultimoParentesis + value);
          aperturas.pop();
        }

      }
      
    }

    return aperturas.length === 0;

  } *


  /* const ordenarTallas = ( arrayDeTallas ) => {

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
      return ordenadas.reverse();
  }; */

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
