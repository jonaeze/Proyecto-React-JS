import React from "react";
import "./styles.css";

const Card = ({ product, onSelect }) => {
  const { id, categoryId, description, image, price, stock, name } =
    product || {};
  return (
    <div className="card" onClick={() => onSelect(product)}>
      <img className="card-image" src={image} alt={name}></img>
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
        <p className="card-stock">{stock} disponible</p>
      </div>
      <div className="card-button-container">
        <button className="card-button-minus">-</button>
        <input type="text" className="card-input" placeholder="0" />
        <button className="card-button-plus">+</button>
      </div>
    </div>
  );
};

export default Card;
