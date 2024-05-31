import { useEffect, useState } from "react";
import useFilter from "./useFilter";
import { jwtDecode } from 'jwt-decode';

export default function useApp() {
  /* const {} = useFilter() */
  //traer data
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isLogged, setIsLogged] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('there is a token')
      const decodedToken = jwtDecode(token);
      setUser(decodedToken);
    }
  }, [localStorage]);

  return (
    {
      setUser,
      user
    }
  );
}
