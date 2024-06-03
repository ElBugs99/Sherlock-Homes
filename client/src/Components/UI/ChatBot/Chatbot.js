import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../assets/animation/bot.json';
import './chatbot.css';


export default function Chatbot() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

  return (
  <div className='chat-bot'>
    <div className='bot-animation-container'>
      <Lottie
      options={defaultOptions}
      isClickToPauseDisabled={true}
      height={90}
      width={90}
      speed={0.4}
    />
    </div>
    
  </div>
  )
}
