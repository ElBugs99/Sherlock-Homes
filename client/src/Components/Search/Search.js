import React from "react";
import "./search.css";
import SideBar from "../UI/SideBar/SideBar";
import NavBar from "../UI/NavBar/NavBar";
import Footer from "../UI/Footer/Footer";
import SearchResults from "./SearchResults/SearchResults";

export default function Search() {
  return (
    <div className="search">
      <NavBar />
      <div className="search-container">
        <div className="search-info">
          <div className="search-info-title"></div>
          <SideBar />
        </div>
        <div className="search-results">
          <SearchResults />
        </div>
      </div>
      <Footer />
    </div>
  );
}
