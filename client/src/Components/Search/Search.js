import React from "react";
import { useLocation } from 'react-router-dom';
import "./search.css";
import SideBar from "../UI/SideBar/SideBar";
import NavBar from "../UI/NavBar/NavBar";
import Footer from "../UI/Footer/Footer";
import SearchResults from "./SearchResults/SearchResults";

export default function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  return (
    <div className="search">
      <NavBar searchHidden={true} />
      <div className="search-container">
        <div className="search-info">
          <div className="search-info-title"></div>
          <SideBar />
        </div>
        <div className="search-results">
          <SearchResults queryParams={queryParams} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
