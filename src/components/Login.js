import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
    // Aquí iría la lógica para enviar los datos de inicio de sesión al servidor
    console.log('Email:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}> {/* Vincular el formulario a la función handleSubmit */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;