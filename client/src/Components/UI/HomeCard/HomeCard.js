import React, { useState, useContext } from "react";
import { FaHeart } from 'react-icons/fa';
import { PiToiletLight } from "react-icons/pi";
import { IoBedOutline } from "react-icons/io5";
import { TbMeterSquare } from "react-icons/tb";
import { addDotsToNumber } from '../../../utils/numberUtils';
import { appContext } from '../../../appContext';
import "./homeCard.css";

export default function HomeCard({
  title,
  price,
  bedrooms,
  bathrooms,
  sqft,
  media,
  city,
  property_id,
  onClick
}) {
  const { user } = useContext(appContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = async (e) => {
    e.stopPropagation(); // Prevent card click event

    if (!user) {
      // Redirect to login if user is not logged in
      window.location.href = '/login';
      return;
    }

    setIsFavorite(!isFavorite);
    
    try {
      const url = isFavorite ? 'http://localhost:3001/deleteFavorite' : 'http://localhost:3001/addFavorite';
      /*const method = isFavorite ? 'DELETE' : 'POST'; */

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: user.id, propertyId: property_id }),
      });

      const data = await response.json();
      if (data.success) {
        console.log(isFavorite ? 'Favorite removed' : 'Favorite added');
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error updating favorite status:', error);
    }
  };

  return (
    <div 
      className="home-card"
      onClick={onClick}
    >
      <div className="home-card-container">
        <div className="home-card-img-container">
          <img className="home-card-img" src={media} alt="home" />
          <div 
            className={`favorite-icon-container ${isFavorite ? 'favorite' : ''}`}
            onClick={handleFavoriteClick}
          >
            <FaHeart className="favorite-icon" />
          </div>
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
