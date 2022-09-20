import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../assets/styles/singleCocktail.css";
const CocktailDetail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    const getCocktail = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const drink = drinks.map((item) => {
          const {
            idDrink,
            strAlcoholic,
            strCategory,
            strDrinkThumb,
            strGlass,
            strDrink,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = item;
          const ingredient = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          return {
            id: idDrink,
            name: strDrink,
            alcoholic: strAlcoholic,
            category: strCategory,
            ingredients: ingredient,
            image: strDrinkThumb,
            glass: strGlass,
          };
        });
        setCocktail(drink);
      } else {
        setCocktail([]);
      }
    };
    getCocktail();
  }, [id]);

  console.log(cocktail);
  return (
    <div className="single-cocktail-detail">
      <h1>Cocktail Detail</h1>

      {cocktail.map((items) => {
        return (
          <div className="cocktail-det" key={items.name}>
            <img src={items.image} alt={items.name} />

            <div className="det-text">
              <p>
                <span className="det-title"> Name : </span>
                <span className="det-title-desc">{items.name}</span>
              </p>
              <p>
                <span className="det-title"> Category : </span>
                <span className="det-title-desc">{items.category}</span>
              </p>
              <p>
                <span className="det-title">Alcoholic/ Non-Alcoholic :</span>
                <span className="det-title-desc">{items.alcoholic}</span>
              </p>
              <p>
                <span className="det-title"> Glass : </span>
                <span className="det-title-desc">{items.glass}</span>
              </p>
              <p>
                <span className="det-title"> Ingredients : </span>
                {items.ingredients.map((ingredient, index) => {
                  return ingredient ? (
                    <span className="det-title-desc" key={index}>
                      {ingredient},
                    </span>
                  ) : null;
                })}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CocktailDetail;
