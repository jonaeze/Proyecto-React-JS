import React, { useContext } from "react";
import "./styles.css";
import { useLocation, useParams } from "react-router-dom";
import Card from "../../components/card";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { onDecreaseItem, onIncreaseItem, getItemQuantity } =
    useContext(CartContext);

  return (
    <div className="container-detail">
      <Card
        product={state}
        key={state.name}
        onSelect={() => {}}
        type="cardMax"
        decreaseQty={onDecreaseItem}
        increaseQty={onIncreaseItem}
        numberOfItem={getItemQuantity(state?.id)}
      ></Card>
      <div className="button-home-container">
        <Link to="/" className="button-home">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Detail;
