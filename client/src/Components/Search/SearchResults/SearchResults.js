import React, { useState, useContext, useEffect } from "react";
import HomeCard from "../../UI/HomeCard/HomeCard";
import Pagination from "../../UI/Pagination/Pagination";
import defaultImage from "../../../assets/images/defaulthome2.jpg";
import { appContext } from "../../../appContext";
import HouseModal from "../../UI/HouseModal/HouseModal";
import Spinner from "../../UI/Spinner/Spinner";
/* import useFilter from "../../../hooks/useFilter"; */

export default function SearchResults({ data }) {

  /* const { error } = useContext(appContext); */
  const [filteredItems, setFilteredItems] = useState([])
  const [houses, setHouses] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [ error, setError ] = useState(false);

  //traer data

  const fetchHouses = async () => {
    try {
      const response = await fetch("http://localhost:3001/houses?page=2&limit=42");
      const data = await response.json();
      setHouses(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  console.log('houses', houses);


  //paginador de la data
  const postsPerPage = 9;
  //const [postsPerPage, setPostsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  //input test

  const setSearchFilteredData = (value) => {
    const filteredList = houses.filter((item) => {
      return item.location.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredItems(filteredList);
    console.log('SearchResults filteredList', filteredList);
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

  const handleOpenModal = (property) => {
    setSelectedProperty(property);
  };

  useEffect(() => {
    console.log('searchQuery', searchQuery)
  }, [searchQuery])


  /* const information = ( filteredItems.length )
    ? filteredItems
    : houses; */

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const flag = false;

  if (flag) return <div>error</div>;

  if (isLoading)
    return (
      <div className="preload-container">
        <Spinner />
        <div className="loading">Cargando...</div>
      </div>
    );

  if (!houses.length && isLoading) return (
    <div className="search-results-container">
      <div className="errormsj">{`No hay resultados para "${searchQuery}"`}</div>
    </div>
  )

  if (error)
    return (
      <div className="preload-container">
        <div className="errormsj">Ha ocurrido un error</div>
      </div>
    );

  return (
    <>
      <div>Resultados: {houses?.meta?.totalCount}</div>
      <input
        className=""
        spellCheck="false"
        value={searchQuery}
        onChange={handleOnChangeSearch}
      />
      <button className="" onClick={handleSubmit}>
        Buscar
      </button>
      <div className="search-results-container">
        {houses?.data?.map((x, index) => {
          return (
            <>
              <HomeCard
                key={index}
                title={x.title}
                price={x.price}
                bedrooms={x.bedrooms}
                bathrooms={x.bathrooms}
                sqft={x.sqft}
                location={x.location}
                media={x.media[0] === null || undefined ? defaultImage : x.media[0]}
                onClick={() => window.open(`/Property/${x.id}`, '_blank')}
              />
            </>
          );
        })}
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
