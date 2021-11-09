import React from "react";
import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "./searchQueryParamName";
import { useQueryParameter, useRepalceQueryParameter } from "./queryParameters";

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const repalceQueryParameter = useRepalceQueryParameter();

  const OnInputChange = ({ target }) => {
    repalceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() === "" ? undefined : target.value,
    });
  };
  return (
    <Wrapper>
      <Input placeholder="Filtruj zadania" value={query || ""} onChange={OnInputChange} />
    </Wrapper>
  );
};
export default Search;
