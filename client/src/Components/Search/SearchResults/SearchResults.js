import React, { useState, useContext, useEffect } from "react";
import HomeCard from "../../UI/HomeCard/HomeCard";
import Pagination from "../../UI/Pagination/Pagination";
import defaultImage from "../../../assets/images/defaulthome2.jpg";
import { appContext } from "../../../appContext";
import useFilter from "../../../hooks/useFilter";

export default function SearchResults({ data}) {

  const { houses, loading, error } = useContext(appContext);
  const [ filteredItems, setFilteredItems ] = useState([])
  /* const { filteredItems } = useFilter(); */
  //traer data
  //paginador de la data
  const postsPerPage = 9;
  //const [postsPerPage, setPostsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts , setCurrentPosts] = useState([]);

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

  useEffect(() =>{
    setFilteredItems(houses)
  },[])


  //test
  const testObj = {
    atributes: "3 baños, 5 dorms",
    id: 2,
    imageurl: "https://elcomercio.pe/resizer/HNec1mVtOB2Wc3wHGTBU1FVEObM=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LR2Z6HNJBZGLDFS65BHD7SJZQU.jpg",
    location: "viña",
    pricenumber: "7.000",
    pricestring: "UF 7000",
    title: "CASA BONITA",
    url: "urlfalsa"}

  console.log('searchResults filteredItems', filteredItems)



  const information = ( filteredItems.length )
    ? filteredItems
    : houses;

  console.log('filteredItems.length', filteredItems.length);
  console.log('search info', information);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  /* const currentPosts = filteredItems.slice(firstPostIndex, lastPostIndex); */

  useEffect(() =>{
     setCurrentPosts(filteredItems.slice(firstPostIndex, lastPostIndex))
  },[filteredItems, firstPostIndex, lastPostIndex])

  const flag = false;
  
  if (!filteredItems.length) return (
    <div className="search-results-container">
        <div className="errormsj">{`No hay resultados para "${searchQuery}"`}</div>
      </div>
  )

  if (flag) return <div>error</div>;

  if (loading)
    return (
      <div className="search- results-container">
        <div className="loading">Cargando...</div>
      </div>
    );
  if (error)
    return (
      <div className="search-results-container">
        <div className="errormsj">Ha ocurrido un error</div>
      </div>
    );

  return (
    <>
      <div>Resultados: {information.length}</div>
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
        {currentPosts.map((x, index) => {
          return (
            <HomeCard
              key={index}
              title={x.title}
              priceString={x.pricestring}
              atributes={x.atributes}
              location={x.location}
              imageUrl={x.imageurl === null ? defaultImage : x.imageurl}
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
