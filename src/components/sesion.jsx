import React, { useState } from 'react';

function Register() {
  const [userType, setUserType] = useState('estudiante'); // Por defecto, se establece como "estudiante"

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 xl:w-2/4 text-center">
        <h1 className="text-gray-800 text-3xl mb-4">¿Cual es tu rol?</h1>

        {/* Tipo de Usuario */}
        <div className="mb-4">
          <div>
            <button
              className={`${
                userType === 'estudiante' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
              } py-2 px-4 rounded-full mr-4`}
              onClick={() => handleUserTypeChange('estudiante')}
            >
              Estudiante
            </button>
            <button
              className={`${
                userType === 'tutor' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
              } py-2 px-4 rounded-full`}
              onClick={() => handleUserTypeChange('tutor')}
            >
              Tutor
            </button>
          </div>
        </div>

        {/* Botón de Registro */}
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 mt-4">Siguiente</button>
      </div>
    </div>
  );
}

export default Register;
