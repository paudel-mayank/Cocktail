import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { CocktailcontextProvider } from "./Context/context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CocktailcontextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </CocktailcontextProvider>
);
