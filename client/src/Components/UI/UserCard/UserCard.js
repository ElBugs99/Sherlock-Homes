import React from 'react';
import './userCard.css';
import useApp from '../../../hooks/useApp';

export default function UserCard() {

    const { user } = useApp();

  return (
    <div className='user-card-container'>
        <div className='user-card'>
            { user?.username || 'user' }
        </div>
    </div>
  )
}
