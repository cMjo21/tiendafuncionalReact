import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link> {/* Enlace a la página principal */}
        </li>
        <li>
          <Link to="/productos">Productos</Link> {/* Enlace a la página de productos */}
        </li>
        <li>
          <Link to="/carrito">Carrito</Link> {/* Enlace al carrito de compras */}
        </li>
        <li>
        <Link to="/login">Iniciar sesión</Link> {/* Enlace al login */}
    </li>
      </ul>
    </nav>
  );
}

export default Navbar;
