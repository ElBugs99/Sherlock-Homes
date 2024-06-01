import React from 'react';
import './scroller2.css';
import img from '../../../assets/images/inmobiliarias/LOGO-ARGENTA-5.png';
import img2 from '../../../assets/images/inmobiliarias/Trei-Inmobiliaria.png';
import img3 from '../../../assets/images/inmobiliarias/cropped-Recurso-2.png';
import img5 from '../../../assets/images/inmobiliarias/aval.png';
import img4 from '../../../assets/images/inmobiliarias/iPeumo-Logo-1.png';
import img6 from '../../../assets/images/inmobiliarias/notari.png';
import img7 from '../../../assets/images/inmobiliarias/green-dreams.png';
import img8 from '../../../assets/images/inmobiliarias/delcerro.png';

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
