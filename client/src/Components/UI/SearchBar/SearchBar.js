import React from 'react'
import search from "../../../assets/images/white-search-icon.svg";
import useFilter from '../../../hooks/useFilter';
import "./searchBar.css"

export default function SearchBar({ callback, setSearchQuery, searchQuery }) {

  const handleOnChangeSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    callback();
  };

  return (
    <div>
      <form className="search-form">
        <input
          placeholder='Encuentra tu nuevo Hogar'
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
