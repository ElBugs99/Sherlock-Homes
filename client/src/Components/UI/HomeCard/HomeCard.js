import React from "react";
import { FaHeart } from 'react-icons/fa';
import { FaShare } from "react-icons/fa";
import { PiToiletLight } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { TbMeterSquare } from "react-icons/tb";
import { addDotsToNumber } from '../../../utils/numberUtils';
import "./homeCard.css";

export default function HomeCard({
  title,
  price,
  uf,
  bedrooms,
  bathrooms,
  sqft,
  property_type,
  media,
  city,
  url,
  onClick
}) {

  return (
    <div 
      className="home-card"
      onClick={onClick}
      >
      <div className="home-card-container">
        <div className="home-card-img-container">
          <img className="home-card-img" src={media} alt="home" />
        </div>
        <div className="home-card-info">
          <div className="">{title}</div>

          <div className="home-card-price">$ { addDotsToNumber(price) }</div>
          <div className=""><IoBedOutline /> {bedrooms} Dormitorios</div>
          <div className=""><PiToiletLight /> {bathrooms} Baños</div>
          { sqft ? <div className=""><TbMeterSquare /> {sqft}  Metros cuadrados</div> : ""}

          <div className="">{city}</div>
        </div>
      </div>
    </div>
  );
}
