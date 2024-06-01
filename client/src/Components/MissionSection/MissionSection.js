import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation/Animation - grafico.json';
import animationData2 from '../../assets/animation/Animation - familia.json';
import animationData3 from '../../assets/animation/Animation - lupaVerde.json';
import './missionSection.css';

export default function MissionSection() {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='m-section-container'>
      <div className='m-section'>
        <div className='m-left'>
          <div className='m-lottie-background'>
            <Lottie
              options={defaultOptions2}
              isClickToPauseDisabled={true}
              height={350}
              width={450}
            />
          </div>
        </div>
        <div className='m-right'>
          <div className='m-right-header'>
            Header
          </div>
          <div className='m-right-body'>

            <div className='m-row'>
              <Lottie
                options={defaultOptions}
                isClickToPauseDisabled={true}
                height={150}
                width={150}
              />
              <div className='m-row-info'>
                INFORMACIOn
              </div>
            </div>

            <div className='m-row'>
              <Lottie
                options={defaultOptions3}
                isClickToPauseDisabled={true}
                height={120}
                width={120}
              />
              <div className='m-row-info'>
                INFORMACIOn
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
