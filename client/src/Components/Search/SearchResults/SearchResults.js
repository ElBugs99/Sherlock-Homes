import React, { useState, useContext, useEffect } from "react";
import HomeCard from "../../UI/HomeCard/HomeCard";
import Pagination from "../../UI/Pagination/Pagination";
import defaultImage from "../../../assets/images/defaulthome2.jpg";
import { appContext } from "../../../appContext";
/* import useFilter from "../../../hooks/useFilter"; */

export default function SearchResults({ data}) {

  const { error } = useContext(appContext);
  const [ filteredItems, setFilteredItems ] = useState([])
  const [ houses, setHouses ] = useState([])
  const [ isLoading, setIsLoading ] = useState(true);


  //traer data

  const fetchHouses = async () => {
    try {
      const response = await fetch("http://localhost:3001/houses?page=2&limit=21");
      const data = await response.json();
      setHouses(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      /* setError(true); */
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


  const [ searchQuery, setSearchQuery] = useState('');

  const handleOnChangeSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.length >= 3) {
      setSearchFilteredData(searchQuery);
    }
  };

  useEffect(() =>{
    console.log('searchQuery', searchQuery)
  },[searchQuery])


  /* const information = ( filteredItems.length )
    ? filteredItems
    : houses; */

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const flag = false;

  if (flag) return <div>error</div>;

  if (isLoading)
    return (
      <div className="search- results-container">
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
      <div className="search-results-container">
        <div className="errormsj">Ha ocurrido un error</div>
      </div>
    );

  return (
    <>
      {/* <div>Resultados: {information.length}</div> */}
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
        {houses.data.map((x, index) => {
          return (
            <HomeCard
              key={index}
              title={x.title}
              /* priceString={x.pricestring}
              atributes={x.atributes}
              location={x.location} */
              imageUrl={x.media[0] === null || undefined ? defaultImage : x.media[0]}
            />
          );
        })}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        postsLen={filteredItems.length}
        currentPage={currentPage}
      />
    </>
  );
}
