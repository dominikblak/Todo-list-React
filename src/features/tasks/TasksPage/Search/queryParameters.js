import { useLocation, useHistory } from "react-router";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
};

export const useRepalceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();
  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    const newSearch = searchParams.toString();
    history.push(`${location.pathname}?${newSearch}`);
  };
};
