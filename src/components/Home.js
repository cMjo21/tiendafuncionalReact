import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './Home.css';
import { Container, Carousel, CarouselItem } from 'react-bootstrap';

function Home() {
  const { data: productos } = useFetch({ url: 'https://fakestoreapi.com/products' });

  const productosDestacados = productos ? productos.slice(0, 3) : []; // Obtener los primeros 3 productos

  // Crear un nuevo array con los productos para cada diapositiva
  const diapositivas = [];
  for (let i = 0; i < productosDestacados.length; i += 3) {
    diapositivas.push(productosDestacados.slice(i, i + 3));
  }

  return (
    <Container>
      {/* ... otro código ... */}

      <h2>Productos destacados</h2>
      <Carousel>
        {diapositivas.map((diapositiva, index) => ( // Iterar sobre las diapositivas
          <CarouselItem key={index}>
            <div className="d-flex justify-content-around">
              {diapositiva.map(producto => ( // Iterar sobre los productos de cada diapositiva
                <Link to={`/producto/${producto.id}`} key={producto.id}>
                  <img
                    src={producto.image}
                    alt={producto.title}
                    className="d-block w-75"
                  />
                </Link>
              ))}
            </div>
            
          </CarouselItem>
        ))}
      </Carousel>

      {/* ... otro código ... */}
    </Container>
  );
}

export default Home;