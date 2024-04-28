import React from 'react'
import "./searchBar.css"
import search from "../../../assets/images/white-search-icon.svg";

export default function SearchBar() {
  return (
    <div>
      <form className="search-form">
        <input className="top-input" spellCheck="false" />
        <button className="search-btn">
          <img src={search} className="search-icon" alt="search" />
        </button>
      </form>
    </div>
  )
}
