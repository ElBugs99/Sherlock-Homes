import React, { useState, useEffect } from 'react';
import './userCard.css';

// User images
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

const UserImage = ({ size = 100, }) => {
  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    // Select a random image from the userImages array
    const randomIndex = Math.floor(Math.random() * userImages.length);
    setRandomImage(userImages[randomIndex]);
  }, []);

  return (
    <img
      src={randomImage}
      alt='User Profile'
      className='user-image'
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
};

export default UserImage;
