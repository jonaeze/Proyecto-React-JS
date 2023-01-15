import "../itemListContainer/styles.css";
import { PRODUCTS } from "../../constants/data/products.js";
import Card from "../card";
import { useNavigate } from "react-router-dom";

const ItemList = () => {
  const navigate = useNavigate();
  const onHandlerSelect = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div className="item-list-container">
      <h1>Productos Destacados</h1>
      <div className="products-container">
        {PRODUCTS.map((product) => (
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
