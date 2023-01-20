import React, { useContext, useState, useEffect } from "react";
import "./styles.css";
import { useParams, Link } from "react-router-dom";
import Card from "../../components/card";
import { CartContext } from "../../context";
import {
  collection,
  getDocs,
  doc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { onDecreaseItem, onIncreaseItem, getItemQuantity } =
    useContext(CartContext);

  useEffect(() => {
    const db = getFirestore();

    const q = query(collection(db, "products"), where("id", "==", id));
    getDocs(q)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          setProduct(doc.data());
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="container-detail">
      {product ? (
        <Card
          product={product}
          key={product.name}
          onSelect={() => {}}
          type="cardMax"
          decreaseQty={onDecreaseItem}
          increaseQty={onIncreaseItem}
          numberOfItem={getItemQuantity(product?.id)}
        />
      ) : (
        <Link to="/" className="button-home">
          Home
        </Link>
      )}
    </div>
  );
};

export default Detail;
