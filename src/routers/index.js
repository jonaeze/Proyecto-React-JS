import { Routes, Route } from "react-router-dom";
import { Home, Detail, Cart } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/product/:id" element={<Detail />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default Router;
