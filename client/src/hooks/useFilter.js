import { useEffect, useState, useContext } from "react";
import { appContext } from "../appContext";

export default function useFilter() {

  const { houses, loading, error } = useContext(appContext);
  const [ SelectedFilters, setSelectedFilters ] = useState([]);
  const [ filteredItems, setFilteredItems ] = useState()
  const filters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l"];


  return (
    {
       
    }
  );
}