import React from "react";
import "../itemListContainer/style.css";

const ItemList = (props) => {
  return <h1 className="text-wolcome">{props.greeting}</h1>;
};

export default ItemList;
