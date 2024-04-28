import React, { useState, useContext } from "react";
import HomeCard from "../../UI/HomeCard/HomeCard";
import Pagination from "../../UI/Pagination/Pagination";
import defaultImage from "../../../assets/images/defaulthome2.jpg";
import { appContext } from "../../../appContext";

export default function SearchResults() {

  const { houses, loading, error } = useContext(appContext);

  //traer data

  //paginador de la data
  const postsPerPage = 9;
  //const [postsPerPage, setPostsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  //const [currentPosts , setCurrentPosts] = useState([]);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = houses.slice(firstPostIndex, lastPostIndex);

  const flag = false;

  if (flag) return <div>error</div>;
  if (loading)
    return (
      <div className="search-results-container">
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
      <div>Results: {houses.length}</div>
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
        postsLen={houses.length}
        currentPage={currentPage}
      />
    </>
  );
}
