import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="container-cart">
      <h1>Carrito</h1>
      <div className="button-home-container">
        <Link to="/" className="button-home">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Cart;
