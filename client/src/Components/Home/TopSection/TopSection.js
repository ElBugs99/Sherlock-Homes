import React, { useEffect, useState } from "react";
import "./topSection.css";
import homeVideo from "../../../assets/videos/edificios1.mp4";
import DropDown from '../../UI/DropDown/DropDown';
import SearchBar from "../../UI/SearchBar/SearchBar";
import useFilter from '../../../hooks/useFilter';

export default function TopSection() {
  const styles = {
    data: {
      1: { title: "Hogar", style: { color: "#38ba8c" } },
      2: { title: "Duplex", style: { color: "#baa938" } },
      3: { title: "Depto", style: { color: "#ba383c" } },
      4: { title: "Estudio", style: { color: "#38baba" } },
    },
  };

  const { 
    redirectByFilters,
    defineCity,
    defineDorms,
    defineBathrooms,
    defineSqft,
    definePrice
  } = useFilter();

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
          Your browser does not support the video tag.
        </video>
        <div className="top-form">
          <SearchBar callback={() => redirectByFilters()}/>
          <div className="dropdowns">
            <div className="dropdown-element">
              <DropDown
                options={['Ninguna', 'Viña', 'Valparaíso', 'Quilpué', 'Villa alemana']}
                placeholder='Comuna'
                width='110px'
                callback={defineCity}
              />
            </div>
            <div className="dropdown-element">
              <DropDown
                options={['Cualquiera', '1', '2', '3', '+4']}
                placeholder='Dormitorios'
                width='110px'
                callback={defineDorms}
              />
            </div>
            <div className="dropdown-element">
              <DropDown
                options={['Cualquiera', '1', '2', '3', '+4']}
                placeholder='Baños'
                width='110px'
                callback={defineBathrooms}
              />
            </div>
            <div className="dropdown-element">
              <DropDown
                options={['Cualquiera', '50-100 (m²)', '100-200 (m²)', '200-400 (m²)', '+400 (m²)']}
                placeholder='Superficie'
                width='110px'
                callback={defineSqft}
              />
            </div>
            <div className="dropdown-element">
              <DropDown
                options={['Cualquiera', '0-50m', '50-100', '100-200', '200-300']}
                placeholder='Precio'
                width='110px'
                callback={definePrice}
              />
            </div>
          </div>
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
