import React, { useState, useContext, useEffect } from "react";
import HomeCard from "../../UI/HomeCard/HomeCard";
import Pagination from "../../UI/Pagination/Pagination";
import defaultImage from "../../../assets/images/defaulthome2.jpg";
import { appContext } from "../../../appContext";
import HouseModal from "../../UI/HouseModal/HouseModal";
import Spinner from "../../UI/Spinner/Spinner";
import Lottie from 'react-lottie';
import { jwtDecode } from 'jwt-decode';
import { BarChart } from '@mui/x-charts/BarChart';
import { Gauge } from '@mui/x-charts/Gauge';
import { Typography } from '@mui/material';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import animationData from '../../../assets/animation/Animation - sin-resultados.json';
import { addDotsToNumber } from "../../../utils/numberUtils";

export default function SearchResults({ city, bedrooms, bathrooms, sqft, price, q }) {
  const { user } = useContext(appContext);
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [error, setError] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [avgPrice, setAvgPrice] = useState(0);

  const postsPerPage = 42;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchFavoritesAndHouses = async () => {
      const token = localStorage.getItem('token');
      try {
        if (token) {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.id;

          if (token) {
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
          }
        }

        const apiUrl = `http://localhost:3001/houses?page=${currentPage}&limit=${postsPerPage}&city=${city}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&sqft=${sqft}&price=${price}&q=${q}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        setHouses(data);
        setAvgPrice(Math.round(data.meta.avgPrice / 1000000));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };

    fetchFavoritesAndHouses();
  }, [user, currentPage, city, bedrooms, bathrooms, sqft, price, q]);

  const handleFavoriteClick = async (propertyId) => {
    if (!user) {
      // Redirect to login if not logged in
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

  const formatNumber = (num) => new Intl.NumberFormat('es-CL').format(num);

  console.log('houses', houses);

  return (
    <>
      <div className="search-results-header">
        <div className="search-info">
          <div className="search-graph">
            <Typography variant="h6" gutterBottom>Comparación del valor promedio de casas por ciudad</Typography>
            <BarChart
              series={[
                { data: [150], stack: 'A', label: 'Viña', color: '#38ba8c' },
                { data: [100], stack: 'B', label: 'Valparaíso', color: '#264653' },
                { data: [200], stack: 'C', label: 'Quilpué', color: 'rgb(186, 169, 56)' },
                { data: [130], stack: 'D', label: 'Villa alemana', color: 'rgb(186, 56, 60)' },
                { data: [avgPrice], stack: 'E', label: 'Búsqueda', color: 'rgb(56, 186, 186)' }, // Use avgPrice here
              ]}
              xAxis={[
                { scaleType: 'band', data: ['Ciudades'] }
              ]}
              yAxis={[
                {
                  scaleType: 'linear',
                  format: (value) => `$${formatNumber(value)}`,
                  label: 'Millones de Pesos (CLP)',
                }
              ]}
              width={600}
              height={250}
              margin={{
                left: 80,
              }}
              sx={{
                [`.${axisClasses.left} .${axisClasses.label}`]: {
                  transform: 'translate(-40px, 0)',
                },
              }}
              options={{
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: (context) => `${context.dataset.label}: $${formatNumber(context.raw)}`,
                    },
                  },
                },
                scales: {
                  y: {
                    ticks: {
                      callback: (value) => `$${formatNumber(value)}`,
                    },
                  },
                },
              }}
            />
          </div>
          <div className="search-graph">
            <Gauge width={140} height={140} value={houses?.meta?.percentage} startAngle={-90} endAngle={90} series={[{ color: '#38ba8c'}]} />
            <div className="gauge-label">El {houses?.meta?.percentage}% de las casas cumplen con los criterios de búsqueda.</div>
          </div>
        </div>
        <div className="search-info">
          <div className="search-results-header-content">
            Resultados: <div className="res">{houses?.meta?.totalCount}</div>
            En {searchParameters()}
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="preload-container">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="search-results-container">
            {houses?.data?.map((x, index) => (
              <HomeCard
                key={index}
                title={x.title}
                price={x.price}
                bedrooms={x.bedrooms}
                bathrooms={x.bathrooms}
                sqft={x.sqft}
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
        </>
      )}
      {selectedProperty && <HouseModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />}
    </>
  );
}
