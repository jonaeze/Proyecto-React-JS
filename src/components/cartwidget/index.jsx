import React from "react";
import "../cartwidget/styles.css";

const ButtonCart = ({ text, onHandlerClick }) => {
  return (
    <button onClick={onHandlerClick} className="button-cart">
      <i className="bi bi-cart-fill"></i> {text}
    </button>
  );
};

export default ButtonCart;
