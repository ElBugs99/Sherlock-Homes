import React from "react";
import "./search.css";
import SideBar from "../UI/SideBar/SideBar";
import NavBar from "../UI/NavBar/NavBar";
import HomeCard from "../UI/HomeCard/HomeCard";

export default function Search() {
  return (
    <div className="search">
      <NavBar />
      <div className="search-container">
        <div className="search-info">
          <div className="search-info-title">Results: 50</div>
          <SideBar />
        </div>
        <div className="search-results">
          <div className="search-results-container">
            <HomeCard />
          </div>
        </div>
      </div>
    </div>
  );
}
