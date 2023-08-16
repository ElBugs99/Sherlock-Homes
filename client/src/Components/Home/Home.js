import React, { useEffect, useState } from 'react';
import './home.css';

export default function Home() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/api')
    .then(response => response.json())
    .then(data => setBackendData(data))
    .catch(error => console.log("error catching data", error))
  }, []);

  console.log(backendData);

  return (
    <div className='home'>
      hola
    </div>
  )
}
