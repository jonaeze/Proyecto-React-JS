import React, { useContext } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";
import { CartItem } from "../../components";
import { addDoc, getFirestore, collection } from "firebase/firestore";

const Cart = () => {
  const { cart, total, onRemoveItem } = useContext(CartContext);
  const onHandleOrder = () => {
    const newOrder = {
      buyer: {
        name: "Bertonasco Jonathan",
        email: "das123@gmail.com",
        phone: "1243367380",
        shippingMethod: "delivery",
        address: "Buenos Aires,Argentina",
      },
      createdAt: new Date(),
      id: 1,
      items: cart,
      payment: {
        currency: "ars",
        method: "visa",
        type: "installments",
      },
      seller: {
        id: 1,
        name: "Juan Carlos",
        phone: "1342768954",
        email: "JuanCarlos@gmail.com",
      },
      shipping: {
        deliveryDate: new Date() + 7,
        trackingNumber: "12746187",
        type: "delivery",
      },
      total: total,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, newOrder)
      .then((docRef) => {
        console.log(docRef);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="cart">
      <h1 className="title">Carrito</h1>
      <div className="cart-content">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <CartItem key={item.id} {...item} onRemoveItem={onRemoveItem} />
            ))}
            <div className="button-container-order">
              <button
                type="button"
                className="button-home"
                onClick={onHandleOrder}
              >
                Order Now
              </button>
            </div>
          </>
        ) : (
          <div>
            <h2 className="title"> Cart is empty</h2>
            <div className="button-home-container">
              <Link to="/" className="button-home">
                Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
