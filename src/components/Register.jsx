import React from 'react';

function Register() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 xl:w-2/4">
        <h1 className="text-gray-800 text-3xl mb-4 text-center">Registro</h1>
        
        {/* Campo de Nombre */}
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-600 text-sm font-semibold mb-2">Nombre</label>
          <input
            type="text"
            id="nombre"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese su nombre"
          />
        </div>
        
        {/* Campo de Apellido */}
        <div className="mb-4">
          <label htmlFor="apellido" className="block text-gray-600 text-sm font-semibold mb-2">Apellido</label>
          <input
            type="text"
            id="apellido"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese su apellido"
          />
        </div>

        {/* Campo de Contraseña */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">Contraseña</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese su contraseña"
          />
        </div>

        {/* Campo de Número de Teléfono */}
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-gray-600 text-sm font-semibold mb-2">Número de Teléfono</label>
          <input
            type="tel"
            id="telefono"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Ingrese su número de teléfono"
          />
        </div>

        {/* Campo de Universidad */}
        <div className="mb-4">
          <label htmlFor="universidad" className="block text-gray-600 text-sm font-semibold mb-2">Universidad</label>
          <select id="universidad" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            <option value="">Seleccione su universidad</option>
            <option value="universidad1">Universidad 1</option>
            <option value="universidad2">Universidad 2</option>
            <option value="universidad3">Universidad 3</option>
          </select>
        </div>

        {/* Campo de Facultad */}
        <div className="mb-4">
          <label htmlFor="facultad" className="block text-gray-600 text-sm font-semibold mb-2">Facultad</label>
          <select id="facultad" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            <option value="">Seleccione su facultad</option>
            <option value="facultad1">Facultad 1</option>
            <option value="facultad2">Facultad 2</option>
            <option value="facultad3">Facultad 3</option>
          </select>
        </div>

        {/* Campo de Carrera */}
        <div className="mb-4">
          <label htmlFor="carrera" className="block text-gray-600 text-sm font-semibold mb-2">Carrera</label>
          <select id="carrera" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
            <option value="">Seleccione su carrera</option>
            <option value="carrera1">Carrera 1</option>
            <option value="carrera2">Carrera 2</option>
            <option value="carrera3">Carrera 3</option>
          </select>
        </div>
        
        {/* Botones de Volver y Registrar (Intercambiados) */}
        <div className="mb-4 flex justify-between">
          <button className="bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-600">Volver</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Registrar</button>
        </div>
        
        {/* Agrega aquí cualquier otra funcionalidad que necesites en tu vista de registro */}
        
      </div>
    </div>
  );
}

export default Register;
