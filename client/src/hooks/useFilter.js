import { useEffect, useState, useContext } from "react";
import { appContext } from "../appContext";

export default function useFilter() {

  const { houses, loading, error } = useContext(appContext);
  const [ SelectedFilters, setSelectedFilters ] = useState([]);
  const [ filteredItems, setFilteredItems ] = useState([])
  const filters = ["a", "b", "c"];

  // ------input filter------
  const setSearchFilteredData = (value) => {
    const filteredList = houses.filter((item) => {
      return item.location.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredItems(filteredList);
    console.log('useFilter Searchfunction filteredList', filteredList);
  };

  useEffect(() => {
    console.log('useFilter filteredItems', filteredItems);
  }, [filteredItems]);
  // ------radio filters------

  return {
    setSearchFilteredData,
    filteredItems
  }
}