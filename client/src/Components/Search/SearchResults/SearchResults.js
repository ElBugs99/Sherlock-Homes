import React, { useEffect, useState } from 'react'
import HomeCard from '../../UI/HomeCard/HomeCard'

export default function SearchResults() {

    const [houses , setHouses] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(false);

    //paginador
    const [postsPerPage , setPostsPerPage] = useEffect(10);

    const fetchHouses = async() => {
        try {
            const response = await fetch('http://localhost:3001/houses');
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

    const flag = false;

    if (flag) return <div>error</div>;
    if (loading) return <div className="search-results-container"><div className='loading'>Cargando...</div></div>;
    if (error) return <div className="search-results-container"><div className='errormsj'>Ha ocurrido un error</div></div>;


  return (
    <div className="search-results-container">
      {houses.map(x => {
        console.log(x.imageUrl);
        console.log(x);
        return <HomeCard title={x.title} priceString={x.priceString} atributes={x.atributes} location={x.location} imageUrl={x.imageurl}/>;
      })}
      <HomeCard />
    </div>
  )
}

