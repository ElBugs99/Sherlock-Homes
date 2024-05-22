import React from 'react';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../../../assets/animation/Animation - 1716334461163.json';
import NavBar from '../NavBar/NavBar';
import './noMatch.css';
import Footer from '../Footer/Footer';

export default function NoMatch() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const navigate = useNavigate();

  return (
    <div className='notFound'>
      <NavBar searchHidden={true} />
      <div className='notFound-content'>
        <div className='not-found-svg-container'>
          <Lottie
            options={defaultOptions}
            height={500}
            width={500}
          />
        </div>
        <div className='not-found-info'>Página no encontrada</div>
        <button className='not-found-home' onClick={() => navigate('/')}>Inicio</button>
      </div>
      <Footer />
    </div>
  )
}
