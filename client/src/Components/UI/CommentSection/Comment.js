import React from 'react'
import UserImage from '../UserCard/UserImage'

export default function Comment({ username, content, date }) {
  return (
    <div className='comment-container'>
      <div className='comment-content'>
        <div className='comment-header'>
            <div>
              <UserImage size={80}/>
            </div>
            <div className='comment-username'>
              {username}
            </div>
            <div className='comment-date'>
              {date}
            </div>
        </div>
        <div className='comment-text-wrapper'>
            <div className='comment-text'>
              {content}
            </div> 
        </div>
      </div>
    </div>
  )
}
