import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importar Routes y Route
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails'; // Importar ProductDetails
import Checkout from './components/Checkout'; // Importar Checkout
import Footer from './components/Footer'; // Importar Footer
import Search from './components/Search'; // Importar Search
import Login from './components/Login'; // Importar Login
import { useState } from 'react';

function App() {

const [searchTerm, setSearchTerm] = useState('');
const [cartItems, setCartItems] = useState([]); // Mover el estado aquí


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <Navbar />
      
    
      <Routes> {/* Definir las rutas */}
        <Route path="/" element={<Home />} /> {/* Ruta para la página principal */}        
    
        <Route path="/productos" element={
          <> 
            <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <ProductList searchTerm={searchTerm} cartItems={cartItems} setCartItems={setCartItems}/>
          </>
        } />
               
        <Route path="/producto/:id" element={<ProductDetails />} />
        <Route path="/finalizar-compra" element={<Checkout />} /> {/* Ruta para finalizar la compra */}
        <Route path="/login" element={<Login />} /> {/* Ruta para el login */}
        <Route path="/carrito" element={<ShoppingCart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
        <Footer /> {/* Añadir el Footer */}
    </div>
  );
}

export default App;