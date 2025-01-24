import React from 'react';
import { Link } from 'react-router-dom'; 

function ShoppingCart({ cartItems, setCartItems }) {
  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (productoId) => {
    setCartItems(cartItems.filter(item => item.id !== productoId));
  };

  return (
    <div>
      <h2>Carrito de compras</h2>

      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}

      <Link to="/finalizar-compra">Finalizar compra</Link>
    </div>
  );
}

export default ShoppingCart;