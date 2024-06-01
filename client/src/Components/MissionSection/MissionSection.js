import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/animation/Animation - grafico.json';
import animationData2 from '../../assets/animation/Animation - familia.json';
import animationData3 from '../../assets/animation/Animation - lupaVerde.json';
import animationData4 from '../../assets/animation/Animation - comentario.json';
import animationData5 from '../../assets/animation/Animation - perfil.json';
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

  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: animationData4,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const defaultOptions5 = {
    loop: true,
    autoplay: true,
    animationData: animationData5,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='m-section-container'>

      <div className='m-right-header'>
        Te entregamos:
      </div>

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
          <div className='m-left-subtitle'>
            Encuentra el hogar de tus sueños con Sherlock Homes. Explora las mejores opciones para ti y tu familia. ¿Qué estás esperando?
          </div>
        </div>
        <div className='m-right'>

          <div className='m-right-body'>

            <div className='m-row'>
              <div className='m-lottie'>
                <Lottie
                  options={defaultOptions}
                  isClickToPauseDisabled={true}
                  height={150}
                  width={150}
                />
              </div>

              <div className='m-row-info'>
                <div className='m-row-info-title'>Análisis</div>
                <div className='m-row-info-subtitle'>Subtitulo subtitle Subtitulo</div>
              </div>
            </div>

            <div className='m-row'>
              <div className='m-lottie'>
                <Lottie
                  options={defaultOptions3}
                  isClickToPauseDisabled={true}
                  height={120}
                  width={120}
                />
              </div>
              <div className='m-row-info'>
                <div className='m-row-info-title'>Búsqueda</div>
                <div className='m-row-info-subtitle'>Subtitulo subtitle Subtitulo</div>
              </div>
            </div>

            <div className='m-row'>
              <div className='m-lottie'>
                <Lottie
                  options={defaultOptions4}
                  isClickToPauseDisabled={true}
                  height={120}
                  width={120}
                />
              </div>

              <div className='m-row-info'>
                <div className='m-row-info-title'>Opiniones</div>
                <div className='m-row-info-subtitle'>Subtitulo subtitle Subtitulo</div>
              </div>
            </div>

            <div className='m-row'>
              <div className='m-lottie'>
                <Lottie
                  options={defaultOptions5}
                  isClickToPauseDisabled={true}
                  height={120}
                  width={120}
                />
              </div>

              <div className='m-row-info'>
                <div className='m-row-info-title'>Perfil</div>
                <div className='m-row-info-subtitle'>Subtitulo subtitle Subtitulo</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
