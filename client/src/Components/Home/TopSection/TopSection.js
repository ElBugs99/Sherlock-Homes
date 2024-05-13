import React, { useEffect, useState } from "react";
import "./topSection.css";
import homeVideo from "../../../assets/videos/home-video.mp4";
import search from "../../../assets/images/white-search-icon.svg";
import SearchBar from "../../UI/SearchBar/SearchBar";

export default function TopSection() {
  const styles = {
    data: {
      1: { title: "Hogar", style: { color: "#38ba8c" } },
      2: { title: "Duplex", style: { color: "#baa938" } },
      3: { title: "Depto", style: { color: "#ba383c" } },
      4: { title: "Estudio", style: { color: "#38baba" } },
    },
  };

  const [title, setTitle] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      try {
        if (title > 3) {
          setTitle(1);
        } else {
          setTitle((prev) => prev + 1);
        }
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [title]);

  return (
    <div className="topSection">
      <div className="top-overlay"></div>
      <div className="top-img-container">
        <video className="top-img" autoPlay loop muted>
          <source src={homeVideo} type="video/mp4" />
          {/* Add additional source elements for other formats (WebM, Ogg) */}
          Your browser does not support the video tag.
        </video>
        {/* <img className='top-img' src={img} alt='promo' /> */}
        <div className="top-form">
          <SearchBar />
        </div>
        
        <div className="top-img-text-container">
          <div className="top-img-text">
            
            Encuentra tu nuevo{" "}
            <div style={styles.data[title].style} className="top-letters">
              {styles.data[title].title}.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
