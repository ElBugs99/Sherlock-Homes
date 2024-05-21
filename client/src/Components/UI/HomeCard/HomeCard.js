import React from "react";
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

          <div className="home-card-price">{price}</div>
          <div className="">Dormitorios: {bedrooms}</div>
          <div className="">Baños: {bathrooms}</div>
          { sqft ? <div className="">Metros cuadrados: {sqft}</div> : ""}

          <div className="">{city}</div>
        </div>
      </div>
    </div>
  );
}
