import React from "react";
import "./sideBar.css";

export default function SideBar() {
  return (
    <div className="side-bar">
      SideBar
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="radio" value="Python" />
      <input
        type="radio"
        id="javascript"
        name="fav_language"
        value="JavaScript"
      ></input>
      <input
        type="range"
        name="price"
        id="price"
        min="50000"
        max="500000"
        step="100"
        value="250000"
      />
      <input type="datetime-local" name="datetime" id="datetime" />
      <input type="month" name="month" id="month" />
      <input
        type="date"
        name="myDate"
        min="2013-06-01"
        max="2013-08-31"
        step="7"
        id="myDate"
      />
    </div>
  );
}
