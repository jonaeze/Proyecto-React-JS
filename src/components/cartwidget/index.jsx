import React from "react";
import "../cartwidget/style.css";

const ButtonCart = (props) => {
  return (
    <button className="button-cart">
      <i className="bi bi-cart-fill"></i> {props.text}
    </button>
  );
};

export default ButtonCart;
