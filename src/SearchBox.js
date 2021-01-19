import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const SearchBox = () => (
  <div className="header__search">
    <input type="text" className="header__searchInput" />
    <SearchIcon className="header__searchIcon" />
  </div>
);

export default SearchBox;
