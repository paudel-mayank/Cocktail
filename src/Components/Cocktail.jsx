import React from "react";
import "../assets/styles/cocktail.css";
import { Link } from "react-router-dom";
const Cocktail = ({ id, name, image, alcoholic, category }) => {
  return (
    <div className="card">
      <div className="card-details">
        <Link to={`/cocktaildetail/${id}`}>
          <img src={image} alt={id}></img>
          <p className=" link-text drink-name"> {name}</p>
          <span className="link-text">
            {alcoholic}/{category}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
