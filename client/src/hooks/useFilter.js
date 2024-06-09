import { useState } from "react";


export default function useFilter() {

  const [ city, setCity ] = useState();
  const [ bedrooms, setBedrooms ] = useState();
  const [ bathrooms, setBathrooms ] = useState();
  const [ sqft, setSqft ] = useState();
  const [ price, setPrice ] = useState();

  const redirectByCity = (city) => {
/*     console.log('redirect: ', `/search/${city}/undefined`) */
    window.location.href = `/search/${city}/undefined/undefined/undefined/undefined`;
  }

  const redirectByFilters = () => {
    console.log('search', `/search/${city}`)
    window.location.href = `/search/${city}/${bedrooms}/${bathrooms}/${sqft}/${price}`;
  }

  const defineCity = ( city ) => {
    console.log('city value', city);
    if ( city === 'Ninguna') {
      setCity(undefined);
      return;
    }

    if ( city ) {
      setCity(city);
      return;
    }
/* 
    if (city === 'Valparaíso') {
      setCity(city);
      return;
    }

    if (city === 'Quilpué') {
      setCity(city);
      return;
    }

    if (city === 'Villa alemana') {
      setCity(city);
      return;
    } */
  }

  const defineDorms = (dorms) => {
    console.log('Dorms:', dorms);

    if ( dorms === 'Cualquiera') {
      setBedrooms(undefined);
    }

    if ( dorms ) {
      setBedrooms(dorms);
    }
    
    /* if ( dorms === '2') {
      setBedrooms(dorms);
    }

    if ( dorms === '3') {
      setBedrooms(dorms);
    }

    if ( dorms === '4') {
      setBedrooms(dorms);
    } */
  }

  return {
    redirectByCity,
    redirectByFilters,
    defineCity,
    defineDorms
  }
}