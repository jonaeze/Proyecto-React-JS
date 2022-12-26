import React from "react";
import "./styles.css";
import { useLocation, useParams } from "react-router-dom";
import Card from "../../components/card";
import { Link } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { state } = useLocation();

  console.log("id", id, state, state);

  return (
    <div className="container-detail">
      <Card product={state} key={state.name} onSelect={() => {}}></Card>
      <div className="button-home-container">
        <Link to="/" className="button-home">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Detail;
