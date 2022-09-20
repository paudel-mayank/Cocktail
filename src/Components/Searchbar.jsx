import React, { useRef, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import "../assets/styles/searchbar.css";

import { useGlobalContext } from "../Context/context";
const Searchbar = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef();
  useEffect(() => {
    searchValue.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchCocktail = () => {
    console.log();
    setSearchTerm(searchValue.current.value);
  };

  return (
    <div className="searchbar-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search-cocktail..."
          ref={searchValue}
          onChange={searchCocktail}
        ></input>
        <button className="search-btn" type="submit">
          Search
          <BsSearch className="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
