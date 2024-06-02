import React from 'react';
import './scroller2.css';
import img from '../../../assets/images/inmobiliarias/aym.png';
import img2 from '../../../assets/images/inmobiliarias/look.png';
import img3 from '../../../assets/images/inmobiliarias/logo-casen.png';
import img5 from '../../../assets/images/inmobiliarias/logo-fernando-montserrat.png';
import img4 from '../../../assets/images/inmobiliarias/logocrear.png';
import img6 from '../../../assets/images/inmobiliarias/altet.png';
import img7 from '../../../assets/images/inmobiliarias/lares.png';
import img8 from '../../../assets/images/inmobiliarias/Habitat_Inmobiliaria.png';

export default function Scroller() {
    return (
    <div className="logos2">
      <div className="logos2-slide">
        <img src={img} alt="3M Logo" />
        <img src={img2} alt="3M Logo" />
        <img src={img3} alt="3M Logo" />
        <img src={img4} alt="3M Logo" />
        <img src={img5} alt="3M Logo" />
        <img src={img6} alt="3M Logo" />
        <img src={img7} alt="3M Logo" />
        <img src={img8} alt="3M Logo" />
      </div>

      <div className="logos2-slide">
        <img src={img} alt="3M Logo" />
        <img src={img2} alt="3M Logo" />
        <img src={img3} alt="3M Logo" />
        <img src={img4} alt="3M Logo" />
        <img src={img5} alt="3M Logo" />
        <img src={img6} alt="3M Logo" />
        <img src={img7} alt="3M Logo" />
        <img src={img8} alt="3M Logo" />
      </div>
    </div>
  );
}
