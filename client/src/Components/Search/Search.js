import React from "react";
import { useParams } from 'react-router-dom';
import NavBar from "../UI/NavBar/NavBar";
import Footer from "../UI/Footer/Footer";
import SearchResults from "./SearchResults/SearchResults";
import SearchBar from "../UI/SearchBar/SearchBar";
import DropDown from "../UI/DropDown/DropDown";
import SliderDropDown from "../UI/SliderDropDown/SliderDropDown";
import useFilter from '../../hooks/useFilter';
import { BarChart } from '@mui/x-charts/BarChart';
import { Typography } from '@mui/material';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import './search.css';

export default function Search() {
  const { city, bedrooms, bathrooms, sqft, price, q } = useParams();

  const {
    redirectByFilters,
    defineCity,
    defineDorms,
    defineBathrooms,
    defineSqft,
    definePrice,
    setSearchQuery,
    searchQuery
  } = useFilter();

  const formatNumber = (num) => new Intl.NumberFormat('es-CL').format(num);

  const chartSetting = {
    yAxis: [
      {
        label: 'Millones',
        ticks: {
          callback: (value) => `$${formatNumber(value)}`,
        },
      },
    ],
    width: 500,
    height: 300,
    margin: {
      left: 80,
    },
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-40px, 0)',
      },
    },
  };

  return (
    <div className="search">
      <NavBar searchHidden={true} />
      <div className="search-container">
        <div className="search-header">
          <div className="search-top-form">
            <SearchBar
              callback={() => redirectByFilters()}
              setSearchQuery={setSearchQuery}
              searchQuery={searchQuery}
            />
            <div className="dropdowns">
              <div className="dropdown-element">
                <div className="dropdown-search-label">Comuna</div>
                <DropDown
                  options={['Cualquiera', 'Viña', 'Valparaíso', 'Quilpué', 'Villa alemana']}
                  placeholder='Cualquiera'
                  width='110px'
                  callback={defineCity}
                />
              </div>
              <div className="dropdown-element">
                <div className="dropdown-search-label">Dormitorios</div>
                <DropDown
                  options={['Cualquiera', '1', '2', '3', '+4']}
                  placeholder='Cualquiera'
                  width='110px'
                  callback={defineDorms}
                />
              </div>
              <div className="dropdown-element">
                <div className="dropdown-search-label">Baños</div>
                <DropDown
                  options={['Cualquiera', '1', '2', '3', '+4']}
                  placeholder='Cualquiera'
                  width='110px'
                  callback={defineBathrooms}
                />
              </div>
              <div className="dropdown-element">
                <div className="dropdown-search-label">Superficie (m²)</div>
                <SliderDropDown
                  min={0}
                  max={3000}
                  placeholder='Cualquiera'
                  width='110px'
                  callback={defineSqft}
                  background='#fff'
                  color='#757575'
                  innerWidth='110px'
                />
              </div>
              <div className="dropdown-element">
                <div className="dropdown-search-label">Precio (CLP)</div>
                <SliderDropDown
                  min={0}
                  max={2000000000}
                  placeholder='Cualquiera'
                  width='110px'
                  callback={definePrice}
                  background='#fff'
                  color='#757575'
                  innerWidth='150px'
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="search-results">
          <SearchResults
            city={city}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            sqft={sqft}
            price={price}
            q={q}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
