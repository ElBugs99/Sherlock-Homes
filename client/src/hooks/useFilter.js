import { useEffect, useState } from "react";

export default function useFilter() {
  const [city, setCity] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [sqft, setSqft] = useState([0, 3000]);
  const [price, setPrice] = useState([0, 2000000000]);
  const [searchQuery, setSearchQuery] = useState(undefined);

  const redirectByCity = (city) => {
    window.location.href = `/search/${city}/undefined/undefined/0-3000/0-2000000000/undefined`;
  };

  const redirectByFilters = () => {
    /* console.log('redirect', `/search/${city}/${bedrooms}/${bathrooms}/${sqft.join('-')}/${price.join('-')}/${searchQuery}`); */
    window.location.href = `/search/${city}/${bedrooms}/${bathrooms}/${sqft.join('-')}/${price.join('-')}/${searchQuery}`;
  };

  const defineCity = (city) => {
    if (city === 'Cualquiera') {
      setCity(undefined);
      return;
    }
    if (city) {
      setCity(city);
      return;
    }
  };

  const defineDorms = (dorms) => {
    if (dorms === 'Cualquiera') {
      setBedrooms(undefined);
    } else {
      setBedrooms(dorms);
    }
  };

  const defineBathrooms = (baths) => {
    if (baths === 'Cualquiera') {
      setBathrooms(undefined);
    } else {
      setBathrooms(baths);
    }
  };

  const defineSqft = (area) => {
    if (area === 'Cualquiera') {
      setSqft([0, 3000]);
    } else {
      setSqft(area);
    }
  };

  const definePrice = (priceRange) => {
    if (priceRange === 'Cualquiera') {
      setPrice([0, 2000000000]);
    } else {
      setPrice(priceRange);
    }
  };

  useEffect(() => {
    console.log('search', searchQuery);
  }, [searchQuery])

  return {
    redirectByCity,
    redirectByFilters,
    defineCity,
    defineDorms,
    defineBathrooms,
    defineSqft,
    definePrice,
    setSearchQuery,
    searchQuery
  };
}
