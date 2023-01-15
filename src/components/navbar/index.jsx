import React, { useState } from "react";
import "../navbar/style.css";
import ButtonCart from "../cartwidget/index.jsx";
import { Sidebar } from "../../components";
import { URL_BASE, URL_ENDPOINTS } from "../../constants/service/index.js";
import { useFetch } from "../../hooks/useFetch.js";
import { Link } from "react-router-dom";

const NavBarItems = () => {
  const [isOpen, setOpen] = useState(false);
  const onHandlerClick = () => {
    setOpen(!isOpen);
  };

  const {
    data: user,
    error,
    loading,
  } = useFetch(`${URL_BASE}${URL_ENDPOINTS.USERS}`);

  return (
    <nav className="navBarItems" user={user[0]}>
      <Sidebar onClose={onHandlerClick} isOpen={isOpen} />
      <Link to="/" className="link-logo">
        <h1 className="logo">
          Madero City <i className="fab fa-react"></i>
        </h1>
      </Link>
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
            <i className=""></i> Quienes Somos?
          </a>
        </li>
        <li className="menu-avatar-container">
          <img src={user?.avatar} alt={user?.name} className="menu-avatar" />
        </li>
        <ButtonCart onHandlerClick={onHandlerClick} text="Carrito"></ButtonCart>
      </ul>
    </nav>
  );
};

export default NavBarItems;
