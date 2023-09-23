import React, { useState, useEffect } from 'react';

function Sesion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInvalidPassword, setIsInvalidPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);

    // Simulación de inicio de sesión
    setTimeout(() => {
      if (email === 'ejic2003@gmail.com' && password === '123456') {
        setIsLoggedIn(true);
        setIsLoading(false);
      } else {
        setIsInvalidPassword(true);
        setIsLoading(false);
      }
    }, 2000);
  };

  useEffect(() => {
    setIsInvalidPassword(false);
  }, [email, password]);

  if (isLoggedIn) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 xl:w-2/4 text-center">
          <h1 className="text-gray-800 text-3xl mb-4">Bienvenido</h1>
          {/* Contenido después del inicio de sesión exitoso */}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 xl:w-2/4 text-center">
        <h1 className="text-gray-800 text-3xl mb-4">Inicio de Sesión</h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-left text-gray-600">Email:</label>
          <input
            type="email"
            className="border p-2 rounded w-full"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Contraseña */}
        <div className="mb-4">
          <label className="block text-left text-gray-600">Contraseña:</label>
          <input
            type="password"
            className="border p-2 rounded w-full"
            placeholder="Tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Mensaje de contraseña incorrecta */}
        {isInvalidPassword && (
          <p className="text-red-500 text-sm mb-2">Contraseña incorrecta. Por favor, intenta de nuevo.</p>
        )}

        {/* Barra de carga */}
        {isLoading && (
          <div className="w-24 mx-auto mt-4">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
          </div>
        )}

        {/* Botón de Inicio de Sesión */}
        <button
          className={`bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 mt-4 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? 'Iniciando Sesión...' : 'Iniciar Sesión'}
        </button>

        {/* Enlace para registrarse */}
        <p className="mt-4">
          ¿No tienes una cuenta? <a href="/registro">Regístrate aquí</a>.
        </p>
      </div>
    </div>
  );
}

export default Sesion;
