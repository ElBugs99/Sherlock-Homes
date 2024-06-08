import { useEffect, useState } from "react";


export default function useFilter() {

  const { city, setCity } = useState();
  const { bedrooms, setBedrooms } = useState();
  const { bathrooms, setBathrooms } = useState();
  const { sqft, setSqft } = useState();
  const { price, setPrice } = useState();

  const redirectByCity = (city) => {
/*     console.log('redirect: ', `/search/${city}/undefined`) */
    window.location.href = `/search/${city}/undefined`;
  }

  const redirectByFilters = () => {
    console.log('search', `/search/${city}`)
    window.location.href = `/search/${city}/${bedrooms}`;///${bathrooms}/${sqft}
  }

  return {
    redirectByCity,
    redirectByFilters
  }
}