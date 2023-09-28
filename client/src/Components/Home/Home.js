import React, { useEffect, useState } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import TopSection from './TopSection/TopSection';

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
        <div>home</div>
        <TopSection />
        <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
    </div>
  )
}
