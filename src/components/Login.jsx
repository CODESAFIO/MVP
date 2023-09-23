import React, { useState } from 'react';

function Login() {
  const [userType, setUserType] = useState('estudiante'); // Por defecto, se establece como "estudiante"
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para rastrear si el usuario ha iniciado sesión

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de inicio de sesión, por ejemplo, verificar credenciales.
    // Simularemos un inicio de sesión exitoso después de 2 segundos para fines de demostración.
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);
  };

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

        {/* Tipo de Usuario */}
        <div className="mb-4">
          <div>
            <label className="block text-left text-gray-600">Tipo de Usuario:</label>
            <div>
              <select
                className="border p-2 rounded w-full"
                value={userType}
                onChange={(e) => handleUserTypeChange(e.target.value)}
              >
                <option value="estudiante">Estudiante</option>
                <option value="tutor">Tutor</option>
              </select>
            </div>
          </div>
        </div>

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

        {/* Botón de Inicio de Sesión */}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 mt-4"
          onClick={handleLogin}
        >
          Iniciar Sesión
        </button>

        {/* Enlace a la página de registro */}
        <p className="mt-4">
          ¿No tienes una cuenta? <a href="Register.jsx">Regístrate</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
