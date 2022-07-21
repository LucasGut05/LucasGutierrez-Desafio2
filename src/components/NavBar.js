import React from "react";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav className="NavBar">
      <h1>Lucas Gutierrez</h1>
      <ul className="ul">
        <li>Acerca de</li>
        <li>Productos</li>
        <li>Promociones</li>
      </ul>
      <CartWidget />
    </nav>
  );
};
