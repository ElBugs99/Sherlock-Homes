import React from 'react';
import './userCard.css';
import Lottie from 'react-lottie';
import useApp from '../../../hooks/useApp';
import animationData from '../../../assets/images/background.json';
import perro from '../../../assets/images/perro.png';

export default function UserCard() {
  const { user } = useApp();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='user-card-container'>
      <div className='user-card'>
        <div className='lottie-background'>
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled={true}
          />
        </div>
        <div className='user-content'>
          <div className='user-image-container'>
            <img src={perro} alt='User Profile' className='user-image' />
          </div>
          <div className='user-info'>
            <h2 className='user-name'>{user?.username || 'User'}</h2>
            <p className='user-email'>{user?.email || 'user@example.com'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
