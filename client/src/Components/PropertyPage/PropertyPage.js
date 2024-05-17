import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function PropertyPage() {

    const { id } = useParams();
    const [ property, setProperty ] = useState();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    const fetchHouses = async () => {
        try {
          const response = await fetch(`http://localhost:3001/houses/${id}`);
          const data = await response.json();
          setProperty(data);
          setIsLoading(false);
        } catch (error) {
          setIsLoading(false);
          /* setError(true); */
        }
      };
    
      useEffect(() => {
        fetchHouses();
      }, []);

      console.log("casa", property)

  if ( isLoading ) return <div>cargando...</div>;
  if ( error ) return <div>Oops, ha ocurrido un error...</div>  

  return (
    <div>
        id: {id}
    </div>
  )
}
