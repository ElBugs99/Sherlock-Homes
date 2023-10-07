import React from 'react'
import './search.css'
import SideBar from '../UI/SideBar/SideBar'

export default function Search() {
  return (
    <div className='search'>
        <div className='search-info'>
            <div className='search-info-title'>Results: 50</div>
            <SideBar />
        </div>
        <div className='search-results'>search</div>
    </div>
  )
}
