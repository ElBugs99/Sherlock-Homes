import { useEffect, useState } from "react";

export default function useFilter() {
  const [city, setCity] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [sqft, setSqft] = useState();
  const [price, setPrice] = useState();

  const redirectByCity = (city) => {
    window.location.href = `/search/${city}/undefined/undefined/undefined/undefined`;
  };

  const redirectByFilters = () => {
    window.location.href = `/search/${city}/${bedrooms}/${bathrooms}/${sqft}/${price}`;
  };

  const defineCity = (city) => {
    if (city === 'Ninguna') {
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
      setSqft(undefined);
    } else {
      setSqft(area);
    }
  };

  const definePrice = (priceRange) => {
    if (priceRange === 'Cualquiera') {
      setPrice(undefined);
    } else {
      setPrice(priceRange);
    }
  };

  return {
    redirectByCity,
    redirectByFilters,
    defineCity,
    defineDorms,
    defineBathrooms,
    defineSqft,
    definePrice,
  };
}
