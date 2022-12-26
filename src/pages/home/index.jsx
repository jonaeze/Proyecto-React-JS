import React from "react";
import "./styles.css";
import { NavBarItems, ItemList } from "../../components";

const Home = () => {
  return (
    <div className="">
      <div>
        <NavBarItems></NavBarItems>
      </div>
      <div>
        <header className="container">
          <ItemList></ItemList>
        </header>
      </div>
    </div>
  );
};

export default Home;
