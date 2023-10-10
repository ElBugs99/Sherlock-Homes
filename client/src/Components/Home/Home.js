import React, { useEffect, useState } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import TopSection from './TopSection/TopSection';
import NavBar from '../UI/NavBar/NavBar';
import PromoSection from './PromoSection/PromoSection';
import InfoSection from './InfoSection/InfoSection';
import Footer from '../UI/Footer/Footer';
import ExploreHomes from './ExploreHomes/ExploreHomes';

export default function Home() {

  const navigate = useNavigate();

  const [backendData, setBackendData] = useState({"users": []})

  useEffect(() => {
    fetch('http://localhost:5000/api')
    .then(response => response.json())
    .then(data => setBackendData(data))
    .catch(error => console.log("error catching data", error))
  }, []);

  console.log(backendData);

  return (
    <div className='home'>
      {backendData.users.map((x, i) => {
        return <div key={i}>{x}</div>
        })}
        <NavBar />
        <TopSection />
        <ExploreHomes />
        <PromoSection />
        <InfoSection />
        <Footer />
        <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
        <button onClick={() => navigate('/search')}>search page</button>
    </div>
  )
}

//agregar valor promedio de vivienda en cada area
