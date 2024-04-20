import React, { useEffect, useState } from 'react'
import search from "../../../assets/images/white-search-icon.svg";
import useFilter from '../../../hooks/useFilter';
import "./searchBar.css"

export default function SearchBar() {
  const { setSearchFilteredData } = useFilter();
  const [ searchQuery, setSearchQuery] = useState('');

  const handleOnChangeSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchFilteredData(searchQuery); 
  };

  useEffect(() =>{
    console.log('searchQuery', searchQuery)
  },[searchQuery])

  return (
    <div>
      <form className="search-form">
        <input 
          className="top-input"
          spellCheck="false"
          value={searchQuery}
          onChange={handleOnChangeSearch}
        />
        <button className="search-btn" onClick={handleSubmit}>
          <img src={search} className="search-icon" alt="search" />
        </button>
      </form>
    </div>
  )
}
