import React, { useEffect, useState } from "react";
import "./topSection.css";
import homeVideo from "../../../assets/videos/edificios1.mp4";
import DropDown from '../../UI/DropDown/DropDown';
import SliderDropDown from '../../UI/SliderDropDown/SliderDropDown';
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
              <div className="dropdown-top-label">Comuna</div>
              <DropDown
                options={['Cualquiera', 'Viña', 'Valparaíso', 'Quilpué', 'Villa alemana']}
                placeholder='Cualquiera'
                width='110px'
                callback={defineCity}
              />
            </div>
            <div className="dropdown-element">
              <div className="dropdown-top-label">Dormitorios</div>
              <DropDown
                options={['Cualquiera', '1', '2', '3', '+4']}
                placeholder='Cualquiera'
                width='110px'
                callback={defineDorms}
              />
            </div>
            <div className="dropdown-element">
              <div className="dropdown-top-label">Baños</div>
              <DropDown
                options={['Cualquiera', '1', '2', '3', '+4']}
                placeholder='Cualquiera'
                width='110px'
                callback={defineBathrooms}
              />
            </div>
            <div className="dropdown-element">
              <div className="dropdown-top-label">Superficie (m²)</div>
              <SliderDropDown
                min={0}
                max={3000}
                placeholder='Cualquiera'
                width='110px'
                callback={defineSqft}
                background='#fff'
                color='#000'
                innerWidth='100%'
              />
            </div>
            <div className="dropdown-element">
              <div className="dropdown-top-label">Precio</div>
              <SliderDropDown
                min={0}
                max={2000000000}
                placeholder='Cualquiera'
                width='110px'
                callback={definePrice}
                background='#fff'
                color='#000'
                innerWidth='100%'
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
