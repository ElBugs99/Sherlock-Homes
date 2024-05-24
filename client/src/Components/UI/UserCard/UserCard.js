import React, { useState, useEffect } from 'react';
import './userCard.css';
import Lottie from 'react-lottie';
import useApp from '../../../hooks/useApp';
import animationData from '../../../assets/images/background.json';

//user images
import perro from '../../../assets/images/perro.png';
import perro2 from '../../../assets/images/perro2.png';
import anaconda from '../../../assets/images/anaconda.png';
import ganesha from '../../../assets/images/ganesha.png';
import jaguar from '../../../assets/images/jaguar.png';
import lobo from '../../../assets/images/lobo.png';
import pandaBear from '../../../assets/images/panda-bear.png';
import parrot from '../../../assets/images/parrot.png';
import walrus from '../../../assets/images/walrus.png';

const userImages = [perro, perro2, anaconda, ganesha, jaguar, lobo, pandaBear, parrot, walrus];

export default function UserCard() {
  const { user } = useApp();
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    // Select a random image from the userImages array
    const randomIndex = Math.floor(Math.random() * userImages.length);
    setRandomImage(userImages[randomIndex]);
  }, []);

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
            <img src={randomImage} alt='User Profile' className='user-image' />
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
