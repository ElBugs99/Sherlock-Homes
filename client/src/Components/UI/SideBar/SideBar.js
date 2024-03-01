import React from 'react';
import './sideBar.css';

export default function SideBar() {
  return (
    <div className='side-bar'>
      SideBar
      <input type='checkbox' />
      <input type='checkbox' />
      <input type='checkbox' />
      <input type='radio' value="Python"/>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
    </div>
  )
}
