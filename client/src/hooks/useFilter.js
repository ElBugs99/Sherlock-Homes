import { useEffect, useState, useContext } from "react";
import { appContext } from "../appContext";

export default function useFilter() {

  const { houses, loading, error } = useContext(appContext);
  const [ SelectedFilters, setSelectedFilters ] = useState([]);
  const [ filteredItems, setFilteredItems ] = useState()
  const filters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m"];

  // ------input filter------
  const setSearchFilteredData = (value) => {
    const filteredList = houses.filter((item) => {
      return item.location.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredItems(filteredItems);
    console.log('filteredList', filteredList);
  };

  return {
    setSearchFilteredData
  }
}