import { useEffect, useState } from "react";


export default function useFilter() {

  const { city, setCity } = useState();

/*   console.log('city state', city) */
  const redirectByCity = (city) => {
    console.log('redirect: ', `/search/${city}`)
    window.location.href = `/search/${city}`;
  }

  return {
    redirectByCity
  }
}