import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './ProductDetails.css'; // Importar el archivo CSS


function ProductDetails() {
  const { id } = useParams();
  const { data: producto, loading, error } = useFetch({ url: `https://fakestoreapi.com/products/${id}` });

  return (
    <div className="product-details">
      {loading ? (
        <div>Cargando producto...</div>
      ) : error ? (
        <div>Error al cargar el producto: {error.message}</div>
      ) : (
        <>
          <img src={producto.image} alt={producto.title} />
          <div className="product-details-info">
          <h3>{producto.title}</h3>
          <p>{producto.description}</p>
          <p>Precio: {producto.price}</p>
          </div>
           </>
      )}
    </div>
  );
}

export default ProductDetails;