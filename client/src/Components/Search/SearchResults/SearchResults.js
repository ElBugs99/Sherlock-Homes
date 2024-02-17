import React, { useState } from 'react'
import HomeCard from '../../UI/HomeCard/HomeCard'

export default function SearchResults() {

    const [houses , setHouses] = useState();
    const [loading , setLoading] = useState(true);
    const [errro , setError] = useState(false);

    const fetchHouses = async() => {
        try {

        } catch {

        }
    }

    const flag = false;

    if (flag) return <div>error</div>;

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

