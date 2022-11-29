import React from "react";
import "../navbar/style.css";
import ButtonCart from "../cartwidget/index.jsx";

const NavBarItems = () => {
  return (
    <nav className="navBarItems">
      <h1 className="logo">
        Madero City <i className="fab fa-react"></i>
      </h1>
      <ul className="nav-menu">
        <li>
          <a className="nav-link" href="/proyecto-react/public/index.html">
            <i className="fa-solid fa-house-user"></i> Inicio
          </a>
        </li>
        <li>
          <a className="nav-link" href="/proyecto-react/public/index.html">
            <i className=""></i> Contacto
          </a>
        </li>
        <li>
          <a className="nav-link" href="/proyecto-react/public/index.html">
            <i className=""></i> Quienes Somos
          </a>
        </li>
        <ButtonCart text="Carrito (0)"></ButtonCart>
      </ul>
    </nav>
  );
};

export default NavBarItems;
