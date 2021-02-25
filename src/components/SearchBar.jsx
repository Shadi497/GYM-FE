// Styling
import { SearchBarStyledt } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyledt
      placeholder="Search"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
