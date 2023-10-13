import React from "react";
import "./homeCard.css";
import img from "../../../assets/images/la-serena.jpg";

export default function HomeCard({ image, price }) {
  return (
    <div className="home-card">
      <div className="home-card-container">
        <div className="home-card-img-container">
          <img className="home-card-img" src={img} alt="home" />
        </div>
        <div className="home-card-info">
          <div className="">description</div>
          <div className="">price</div>
          <div className="">4 dormitorios</div>
          <div className="">3 baños</div>
          <div className="">Sector</div>
        </div>
      </div>
    </div>
  );
}
