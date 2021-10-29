import React from "react";
import { useHistory, useLocation } from "react-router";
import Input from "../../Input";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get("szukaj");
  const OnInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);
    if (target.value.trim() === "") {
      searchParams.delete("szukaj");
    } else {
      searchParams.set("szukaj", target.value);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
  return <Input placeholder="Filtruj zadania" value={query || ""} onChange={OnInputChange} />;
};
export default Search;
