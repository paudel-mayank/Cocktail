import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../Context/context";
import "../assets/styles/cocktaillist.css";
import Cocktail from "./Cocktail";
const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();
  console.log(cocktails);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="cocktail-lists">
      {cocktails.map((cocktail) => {
        return <Cocktail key={cocktail.id} {...cocktail}></Cocktail>;
      })}
    </div>
  );
};

export default CocktailList;
