import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useCallback,
} from "react";

const CocktailContext = createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const CocktailcontextProvider = ({ children }) => {
  const [loading, setisLoading] = useState(true);
  const [cocktails, setcocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");
  const fetchCocktails = useCallback(async () => {
    setisLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      if (!response.ok) {
        throw new Error(
          ` ${response.statusText}(${response.status}) error Occoured`
        );
      }
      const data = await response.json();

      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrinkThumb,
            strDrink,
            strAlcoholic,
            strCategory,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            alcoholic: strAlcoholic,
            category: strCategory,
          };
        });
        setcocktails(newCocktails);
      } else {
        setcocktails([]);
      }
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(true);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchCocktails();
  }, [searchTerm, fetchCocktails]);
  return (
    <CocktailContext.Provider value={{ loading, setSearchTerm, cocktails }}>
      {children}
    </CocktailContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(CocktailContext);
};
export { CocktailContext, CocktailcontextProvider };
