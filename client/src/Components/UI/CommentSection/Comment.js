import React from 'react'

export default function Comment({ username, content, date }) {
  return (
    <div className='comment-container'>
      <div className='comment-content'>
        {username} {content} {date}
      </div>
    </div>
  )
}
