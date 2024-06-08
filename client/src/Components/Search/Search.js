import React from "react";
import { useLocation, useParams } from 'react-router-dom';
import "./search.css";
import SideBar from "../UI/SideBar/SideBar";
import NavBar from "../UI/NavBar/NavBar";
import Footer from "../UI/Footer/Footer";
import SearchResults from "./SearchResults/SearchResults";

export default function Search() {
  const location = useLocation();
  const { city } = useParams();

  return (
    <div className="search">
      <NavBar searchHidden={true} />
      <div className="search-container">
        <div className="search-info">
          <div className="search-info-title"></div>
          <SideBar />
        </div>
        <div className="search-results">
          <SearchResults city={city} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
