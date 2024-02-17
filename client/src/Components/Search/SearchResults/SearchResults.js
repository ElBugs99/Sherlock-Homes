import React from 'react'
import HomeCard from '../../UI/HomeCard/HomeCard'

export default function SearchResults() {

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

