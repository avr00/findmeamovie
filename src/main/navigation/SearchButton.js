import React from "react";
import "./SearchButton.scss";

const SearchButton = props => (
  <div className="search-button">
    <button onClick={props.onClick}>Search</button>
  </div>
);

export default SearchButton;
