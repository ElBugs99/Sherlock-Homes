import React, { useEffect, useState } from 'react'
import HomeCard from '../../UI/HomeCard/HomeCard'

export default function SearchResults() {

    const [houses , setHouses] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(false);

    const fetchHouses = async() => {
        try {
            const response = await fetch('http://localhost:3000/huses');
            const data = await response.json();
            setHouses(data);
            setLoading(false);
        } catch (error){
            console.log(error);
            setLoading(false);
            setError(true);
        }
    }

    useEffect(() => {
        fetchHouses();
    }, [])

    console.log(houses)
    const flag = false;

    if (flag) return <div>error</div>;
    if (loading) return <div className='loading'>Cargando...</div>;
    if (error) return <div className='errormsj'>Ha ocurrido un error</div>;


  return (
    <div className="search-results-container">
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </div>
  )
}

