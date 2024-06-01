import React from 'react';
import './scroller.css';
import img from '../../../assets/images/greenicon.svg';

export default function Scroller() {
    return (
    <div className="logos">
      <div className="logos-slide">
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
      </div>

      <div className="logos-slide">
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
        <img src={img} alt="3M Logo" />
      </div>
    </div>
  );
}
