import React from "react";
import { useLocation } from "react-router";
import Input from "../../Input";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("szukaj");
  return <Input placeholder="Filtruj zadania" value={query || ""} />;
};
export default Search;
