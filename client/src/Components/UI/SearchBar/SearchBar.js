import React from 'react'

export default function SearchBar() {
  return (
    <div>
      <form className="top-form">
          <input className="top-input" spellCheck="false" />
          <button className="search-btn">
            <img className="search-icon" alt="search" />
          </button>
        </form>
    </div>
  )
}
