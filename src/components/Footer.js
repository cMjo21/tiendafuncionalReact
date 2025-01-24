import React from 'react';
import './Footer.css'; // Importar el archivo CSS

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Mi Tienda Online</p>
      {/* Puedes añadir más información, como enlaces a redes sociales */}
    </footer>
  );
}

export default Footer;