
import ProductCard from './ProductCard'; // Importar ProductCard (que crearemos luego)
import { Link } from 'react-router-dom'; // Importar Link
import useFetch from '../hooks/useFetch'; // Importar el custom hook
import './ProductList.css';


function ProductList({ searchTerm,cartItems, setCartItems}) {
  
  const { data: productos, loading, error } = useFetch({ url: 'https://fakestoreapi.com/products' });

  if (loading) {
    return <div>Cargando productos...</div>; // Mostrar un mensaje de carga
  }

  if (error) {
    return <div>Error al cargar los productos: {error.message}</div>; // Mostrar un mensaje de error
  }

  console.log(searchTerm) 
  function filtrarProductos(terminoBusqueda, productos) {
    const termino = terminoBusqueda ? terminoBusqueda.toLowerCase() : ''; // Verificar si terminoBusqueda existe
    return productos.filter(producto => {
      return producto.title && producto.title.toLowerCase().includes(termino);
    });
  }

  const agregarAlCarrito = (producto) => {
    setCartItems([...cartItems, producto]);
  };

  const productosFiltrados = filtrarProductos(searchTerm, productos);

  return (
    <div>
      <h2>Nuestros productos</h2>
      <ul className="product-list">
        {productosFiltrados.map(producto => (
          <li key={producto.id}>
            <Link to={`/producto/${producto.id}`}> {/* Enlace a la página de detalles */}
            <ProductCard producto={producto} agregarAlCarrito={agregarAlCarrito} /> {/* Mostrar cada producto */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;