import React, { useState, useContext, useEffect, useParams } from "react";
import HomeCard from "../../UI/HomeCard/HomeCard";
import Pagination from "../../UI/Pagination/Pagination";
import defaultImage from "../../../assets/images/defaulthome2.jpg";
import { appContext } from "../../../appContext";
import HouseModal from "../../UI/HouseModal/HouseModal";
import Spinner from "../../UI/Spinner/Spinner";
import { jwtDecode } from 'jwt-decode';
/* import useFilter from "../../../hooks/useFilter"; */

export default function SearchResults({ city, bedrooms }) {

  /* const { error } = useContext(appContext); */
  const { user } = useContext(appContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [error, setError] = useState(false);
  const [favorites, setFavorites] = useState([]);

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

        let apiUrl = `http://localhost:3001/houses?page=1&limit=42&city=${city}&bedrooms=${bedrooms}`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();
        setHouses(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
    };

    fetchFavoritesAndHouses();
  }, [user]);

  // Pagination logic
  const postsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  // Search filter logic
  const setSearchFilteredData = (value) => {
    const filteredList = houses.filter((item) => {
      return item.location.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredItems(filteredList);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleOnChangeSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.length >= 3) {
      setSearchFilteredData(searchQuery);
    }
  };

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

    if ( houses?.data?.length === 0)
      return (
        <div className="preload-container">
          <div className="errormsj">No se han encontrado resultados</div>
        </div>
      );

  const checkFavorite = (pubId) => {
    if (!favorites) console.log('favorites doesnt exist');
    return favorites?.includes(pubId);
  }

  return (
    <>
      {/* <input
        className=""
        spellCheck="false"
        value={searchQuery}
        onChange={handleOnChangeSearch}
      />
      <button className="" onClick={handleSubmit}>
        Buscar
      </button> */}
      <div className="search-results-header">
        <div className="search-results-header-content">
          Resultados: <div className="res">{houses?.meta?.totalCount}</div> En {city === 'undefined' ? 'cualquier comuna' : city}
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
        setCurrentPage={setCurrentPage}
        postsLen={filteredItems.length}
        currentPage={currentPage}
      />
      {selectedProperty && <HouseModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />}
    </>
  );
}
