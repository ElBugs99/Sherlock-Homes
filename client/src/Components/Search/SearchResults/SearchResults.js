import React, { useState, useContext, useEffect } from "react";
import HomeCard from "../../UI/HomeCard/HomeCard";
import Pagination from "../../UI/Pagination/Pagination";
import defaultImage from "../../../assets/images/defaulthome2.jpg";
import { appContext } from "../../../appContext";
import HouseModal from "../../UI/HouseModal/HouseModal";
import Spinner from "../../UI/Spinner/Spinner";
import Lottie from 'react-lottie';
import animationData from '../../../assets/animation/Animation - sin-resultados.json';
import { jwtDecode } from 'jwt-decode';
import { addDotsToNumber } from "../../../utils/numberUtils";
import SearchResultsGraphs from "./SearchResultsGraphs/SearchResultsGraphs";

export default function SearchResults({ city, bedrooms, bathrooms, sqft, price, q }) {
  const { user } = useContext(appContext);
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [error, setError] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [avgPrice, setAvgPrice] = useState(0);
  const [cityAvgPrices, setCityAvgPrices] = useState({
    vina: 0,
    quilpue: 0,
    villaAlemana: 0,
    valparaiso: 0,
  });

  const postsPerPage = 42;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        // Fetch favorites
        const favoritesResponse = await fetch(`http://localhost:3001/favorites/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const favoritesData = await favoritesResponse.json();
        if (favoritesData.success) {
          setFavorites(favoritesData.data.map(fav => fav.property_id));
        } else {
          console.error(favoritesData.message);
        }

        // Fetch houses
        const apiUrl = `http://localhost:3001/houses?page=${currentPage}&limit=${postsPerPage}&city=${city}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&sqft=${sqft}&price=${price}&q=${q}`;
        const housesResponse = await fetch(apiUrl);
        const housesData = await housesResponse.json();
        setHouses(housesData);
        setAvgPrice(Math.round(parseFloat(housesData.meta.avgPrice) / 1000000));
        setCityAvgPrices({
          vina: Math.round(parseFloat(housesData.meta.avgPriceViña) / 1000000),
          quilpue: Math.round(parseFloat(housesData.meta.avgPriceQuilpué) / 1000000),
          villaAlemana: Math.round(parseFloat(housesData.meta.avgPriceVillaAlemana) / 1000000),
          valparaiso: Math.round(parseFloat(housesData.meta.avgPriceValparaíso) / 1000000),
        });

        // Fetch averages
        const avgPricesResponse = await fetch('http://localhost:3001/avg');
        const avgPrices = await avgPricesResponse.json();
        setCityAvgPrices(prevPrices => ({
          ...prevPrices,
          vina: Math.round(parseFloat(avgPrices.viña) / 1000000),
          quilpue: Math.round(parseFloat(avgPrices.quilpue) / 1000000),
          villaAlemana: Math.round(parseFloat(avgPrices['villa alemana']) / 1000000),
          valparaiso: Math.round(parseFloat(avgPrices.valparaiso) / 1000000),
        }));

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [user, currentPage, city, bedrooms, bathrooms, sqft, price, q]);

  const handleFavoriteClick = async (propertyId) => {
    if (!user) {
      window.location.href = '/login';
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/addFavorite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ userId: user.id, propertyId })
      });

      if (response.ok) {
        console.log('Property added to favorites');
      } else {
        console.error('Failed to add property to favorites');
      }
    } catch (error) {
      console.error('Error adding property to favorites:', error);
    }
  };

  const priceArray = price.split("-").map(value => parseInt(value, 10));
  const sqftArray = sqft.split("-").map(value => parseInt(value, 10));

  const unfilteredPropertiesArray =
    [
      bedrooms !== 'undefined' ? `${bedrooms} dormitorios` : '',
      bathrooms !== 'undefined' ? `${bathrooms} Baños` : '',
      (sqftArray[0] !== 0 || sqftArray[1] !== 3000) ? `
      ${addDotsToNumber(sqftArray[0]) + ' - ' + addDotsToNumber(sqftArray[1])} (m²) ` : 'cualquier m²',
      (priceArray[0] !== 0 || priceArray[1] !== 2000000000) ? `
      ${addDotsToNumber(priceArray[0]) + ' - ' + addDotsToNumber(priceArray[1])} precio` : 'cualquier precio',
      q !== 'undefined' ? q : ''
    ];

  const propertiesArray = unfilteredPropertiesArray.filter((x) => x !== '');

  const searchParameters = () => {
    return (
      <>
        {city === 'undefined' ? 'cualquier comuna' : city}
        {
          bedrooms !== 'undefined'
            || bathrooms !== 'undefined'
            || sqft !== 'undefined'
            || price !== 'undefined'
            ?
            ' con '
            :
            ''
        }
        {propertiesArray.map((p, i) => {
          if (i + 1 === propertiesArray.length) {
            return p;
          }
          return p + ', ';
        })}
      </>
    )
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  if (isLoading)
    return (
      <div className="preload-container">
        <Spinner />
      </div>
    );

  if (error)
    return (
      <div className="preload-container">
        <div className="errormsj">Ha ocurrido un error</div>
      </div>
    );

  if (houses?.data?.length === 0)
    return (
      <div className="preload-container">
        <div className="errormsj">No se han encontrado resultados para:</div>
        <div className="search-parameters">
          {searchParameters()}
        </div>
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled={true}
          height={200}
          width={200}
        />
      </div>
    );

  const checkFavorite = (pubId) => {
    if (!favorites) console.log('favorites doesnt exist');
    return favorites?.includes(pubId);
  }

  console.log('houses', houses);

  return (
    <>
      <div className="search-results-header">
        <div className="search-info">
          <SearchResultsGraphs avgPrice={avgPrice} percentage={parseFloat(houses?.meta?.percentage)} cityAvgPrices={cityAvgPrices} />
        </div>
        <div className="search-info">
          <div className="search-results-header-content">
            Resultados: <div className="res">{houses?.meta?.totalCount}</div>
            En {searchParameters()}
          </div>
        </div>
      </div>
      <div className="search-results-container">
        {houses?.data?.map((x, index) => (
          <HomeCard
            key={index}
            title={x.title}
            price={x.price}
            bedrooms={x.bedrooms}
            bathrooms={x.bathrooms}
            sqft={x.sqft}
            uf={x.uf}
            location={x.location}
            media={x.media[0] === null || undefined ? defaultImage : x.media[0]}
            property_id={x.id}
            onClick={() => window.open(`/Property/${x.id}`, '_blank')}
            onFavoriteClick={handleFavoriteClick}
            isFavorite={checkFavorite(x.id)}
          />
        ))}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        setCurrentPage={(page) => {
          setIsLoading(true);
          setCurrentPage(page);
          window.scrollTo(0, 0);
        }}
        postsLen={houses?.meta?.totalCount || 0}
        currentPage={currentPage}
      />
      {selectedProperty && <HouseModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />}
    </>
  );
}
