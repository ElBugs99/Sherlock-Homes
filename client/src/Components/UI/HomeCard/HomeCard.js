import React from "react";
import "./homeCard.css";
import img from "../../../assets/images/Faro_La_Serena_451.jpg";

export default function HomeCard({ image, price }) {
  return (
    <div className="home-card">
      <div className="home-card-container">
        <div className="home-card-img-container">
          <img className="home-card-img" src={img} alt="home" />
        </div>
        <div className="home-card-info">
          <div className="">description</div>
          <div className="home-card-price">5.700 UF</div>
          <div className="">4 dormitorios | 3 baños</div>
          <div className="">354 m² útiles</div>
          <div className="">Sector</div>
        </div>
      </div>
    </div>
  );
}
