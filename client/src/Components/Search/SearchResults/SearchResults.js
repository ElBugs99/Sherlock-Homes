import React, { useEffect, useState } from "react";
import HomeCard from "../../UI/HomeCard/HomeCard";
import Pagination from "../../UI/Pagination/Pagination";
import defaultImage from "../../../assets/images/defaulthome2.jpg";

export default function SearchResults() {
  //traer data
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //paginador de la data
  const postsPerPage = 9;
  //const [postsPerPage, setPostsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  //const [currentPosts , setCurrentPosts] = useState([]);

  const fetchHouses = async () => {
    try {
      const response = await fetch("http://localhost:3001/houses");
      const data = await response.json();
      setHouses(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = houses.slice(firstPostIndex, lastPostIndex);
  console.log(currentPosts);

  useEffect(() => {
    fetchHouses();
  }, []);

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
