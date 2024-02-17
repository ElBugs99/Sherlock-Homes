import React from "react";
import "./homeCard.css";
import img from "../../../assets/images/Faro_La_Serena_451.jpg";

export default function HomeCard({ title, priceString, atributes, location, imageUrl, url }) {
  //falta descripcion y metros cuadrados
  return (
    <div className="home-card">
      <div className="home-card-container">
        <div className="home-card-img-container">
          <img className="home-card-img" src={imageUrl} alt="home" />
        </div>
        <div className="home-card-info">
          <div className="">{title}</div>
          
          <div className="home-card-price">{priceString}</div>
          <div className="">{atributes}</div>
          
          <div className="">{location}</div>
        </div>
      </div>
    </div>
  );
}
