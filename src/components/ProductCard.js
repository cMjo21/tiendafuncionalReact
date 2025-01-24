import React from 'react';
import './ProductCard.css';

function ProductCard({ producto, agregarAlCarrito }) {
  return (
    <div className="product-card">
      <div className="product-card__image-container"> {/* Agrega un contenedor para la imagen */}
        <img className="product-card__image" src={producto.image} alt={producto.title} />
      </div>
      <h3 className="product-card__title">{producto.title}</h3>
      <p className="product-card__price">Precio: {producto.price}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  );
}

export default ProductCard;