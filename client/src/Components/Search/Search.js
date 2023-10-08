import React from 'react'
import './search.css'
import SideBar from '../UI/SideBar/SideBar'
import NavBar from '../UI/NavBar/NavBar'

export default function Search() {
  return (
    <div className='search'>
        <NavBar />
        <div className='search-info'>
            <div className='search-info-title'>Results: 50</div>
            <SideBar />
        </div>
        <div className='search-results'>search</div>
    </div>
  )
}
