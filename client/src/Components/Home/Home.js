import React from 'react';
import './home.css';
import TopSection from './TopSection/TopSection';
import NavBar from '../UI/NavBar/NavBar';
import PromoSection from './PromoSection/PromoSection';
import InfoSection from './InfoSection/InfoSection';
import Footer from '../UI/Footer/Footer';
import ExploreHomes from './ExploreHomes/ExploreHomes';
import MissionSection from '../MissionSection/MissionSection';
import Asociates from '../Asociates/Asociates';
/* import Chatbot from '../UI/ChatBot/Chatbot'; */

export default function Home() {

  return (
    <div className='home'>
      <NavBar searchHidden={true} />
      <TopSection />
      <ExploreHomes />
      <MissionSection />
      <PromoSection />
      <Asociates />
      <InfoSection />
      {/*<Chatbot /> */}
      <Footer />
    </div>
  )
}

