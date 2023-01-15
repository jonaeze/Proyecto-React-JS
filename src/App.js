import React from "react";
import Router from "./routers";
import { NavBarItems } from "./components";
import { CartProvider } from "./context";

const app = () => {
  return (
    <div>
      <CartProvider>
        <NavBarItems></NavBarItems>
        <Router />
      </CartProvider>
    </div>
  );
};

export default app;
