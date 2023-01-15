import React, { useContext } from "react";
import "../cartwidget/styles.css";
import { CartContext } from "../../context";

const ButtonCart = ({ text, onHandlerClick }) => {
  const { cart } = useContext(CartContext);

  return (
    <button onClick={onHandlerClick} className="button-cart">
      <i className="bi bi-cart-fill"></i>
      {text}
      <div className="header-menu-cart-number-container">
        <span className="header-menu-cart-number">{cart.length}</span>
      </div>
    </button>
  );
};

export default ButtonCart;
