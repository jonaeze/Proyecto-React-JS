import React from "react";
import "./styles.css";

const Card = ({
  product,
  onSelect,
  type = "vCard",
  decreaseQty,
  increaseQty,
  numberOfItem,
}) => {
  const { id, categoryId, description, image, price, stock, name } =
    product || {};
  return (
    <div
      className={type === "vCard" ? "card" : "cardMax"}
      onClick={() => onSelect(product)}
    >
      <img className="card-image" src={image} alt={name}></img>
      <div className="card-content">
        <h3 className="card-name">{name}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">${price}</p>
        <p className="card-stock">
          <b>{stock}</b> disponible
        </p>
      </div>
      {type === "cardMax" && (
        <div className="card-button-container">
          <button
            onClick={() => decreaseQty(id)}
            className="card-button-minus"
            disabled={numberOfItem === 0}
          >
            -
          </button>
          <input
            disabled
            type="text"
            className="card-input"
            value={numberOfItem}
          />
          <button
            onClick={() => increaseQty(id)}
            className="card-button-plus"
            disabled={numberOfItem === stock}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
