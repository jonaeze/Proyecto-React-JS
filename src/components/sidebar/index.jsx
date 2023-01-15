import React, { useContext } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import CartItem from "../cart-items";

const Sidebar = ({ onClose, isOpen }) => {
  const { cart, total, onRemoveItem } = useContext(CartContext);
  return (
    <div
      className="sidebar"
      style={{
        transform: isOpen ? "translateX(0%)" : "translateX(100%)",
      }}
    >
      <div className="close-button-container">
        <button onClick={onClose} className="close-button">
          X
        </button>
      </div>
      <h2 className="title">Products List</h2>
      <div className="container-cart-sidebar">
        {cart.length === 0 ? (
          <p className="empty-cart">Your Cart Is Empty</p>
        ) : (
          cart.map((item) => (
            <CartItem key={item.id} {...item} onRemoveItem={onRemoveItem} />
          ))
        )}
        <p>Total:</p>
        <h2>${total}</h2>
        <Link to="/cart" className="button-cart-sidebar">
          Go to cart
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
