import "../itemListContainer/styles.css";
import React from "react";
import Card from "../card";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../hooks/useFirebase.js";
import FilterMenuItem from "../filter-menu";
import {
  collection,
  getDoc,
  getFirestore,
  where,
  query,
} from "firebase/firestore";

const ItemList = () => {
  const navigate = useNavigate();
  const { products, categories, setProducts, setLoading } = useFirebase();

  const onHandlerSelect = (product) => {
    navigate(`/product/${product.id}`);
  };

  const onFilter = (id) => {
    setLoading(true);
    const db = getFirestore();
    const q = query(collection(db, "products"), where("categoryId", "==", id));

    getDoc(q)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No Hay Resultados");
          setProducts([]);
        } else {
          const result = snapshot.docs.map((doc) => doc.data());
          setProducts(result);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="item-list-container">
      <div className="filter-menu-container">
        {categories &&
          categories.map((category) => (
            <FilterMenuItem
              key={category.id}
              {...category}
              onFilter={onFilter}
            />
          ))}
      </div>
      <h1>Productos Destacados</h1>
      <div className="products-container">
        {products.map((product) => (
          <Card
            product={product}
            key={product.id}
            onSelect={onHandlerSelect}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
