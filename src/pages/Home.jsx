import React from "react";
import CocktailList from "../Components/CocktailList";
import Searchbar from "../Components/Searchbar";
const Home = () => {
  return (
    <div>
      <Searchbar />
      <CocktailList />
    </div>
  );
};

export default Home;
