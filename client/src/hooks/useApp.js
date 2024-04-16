import React, { useEffect, useState } from "react";

export default function useApp() {
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
      console.log('pasando por useEffect')
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = houses.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    fetchHouses();
  }, []);


  return (
    {
        houses,
        postsPerPage,
        loading,
        error
    }
  );
}
