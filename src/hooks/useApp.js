import { useEffect, useState } from "react";

export default function useApp() {
  //traer data
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  const postsPerPage = 9;

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
