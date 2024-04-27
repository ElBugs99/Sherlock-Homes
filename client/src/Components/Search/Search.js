import React from "react";
import "./search.css";
import SideBar from "../UI/SideBar/SideBar";
import NavBar from "../UI/NavBar/NavBar";
import Footer from "../UI/Footer/Footer";
import SearchResults from "./SearchResults/SearchResults";
import useFilter from "../../hooks/useFilter";

export default function Search() {
  const { filteredItems } = useFilter();

  return (
    <div className="search">
      <NavBar searchHidden={true}/>
      <div className="search-container">
        <div className="search-info">
          <div className="search-info-title"></div>
          <SideBar />
        </div>
        <div className="search-results">
          <SearchResults data={filteredItems}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
