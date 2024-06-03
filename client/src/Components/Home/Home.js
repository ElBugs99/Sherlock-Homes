import React, { useEffect, useState } from 'react';
import './home.css';
//import { useNavigate } from 'react-router-dom';
import TopSection from './TopSection/TopSection';
import NavBar from '../UI/NavBar/NavBar';
import PromoSection from './PromoSection/PromoSection';
import InfoSection from './InfoSection/InfoSection';
import Footer from '../UI/Footer/Footer';
import ExploreHomes from './ExploreHomes/ExploreHomes';
import MissionSection from '../MissionSection/MissionSection';
import Asociates from '../Asociates/Asociates';
import Chatbot from '../UI/ChatBot/Chatbot';

export default function Home() {

  //const navigate = useNavigate();
  //<button onClick={() => navigate('/login')}>Iniciar Sesión</button>
  //<button onClick={() => navigate('/search')}>search page</button>


  return (
    <div className='home'>
        <NavBar searchHidden={true}/>
        <TopSection />
        <ExploreHomes />
        <MissionSection />
        <PromoSection />
        <Asociates />
        <InfoSection />
        <Chatbot />
        <Footer />
    </div>
  )
}

//agregar valor promedio de vivienda en cada area
