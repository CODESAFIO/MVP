import React, { useState } from 'react';

function Tutorship() {
  const [formData, setFormData] = useState({
    paisProductor: '',
    regionVinicola: '',
    descripcionBodega: '', // Nuevo campo de descripción
    nombre: '',
    fundacionFecha: '', 
    direccion: '',
    telefono: '',
    pagina: '',
    descripcionVinos: '',  
  });

 

  const materiasData = [
    'Francia',
    'Uruguay',
    'Austria',
    'Geoorgia',
    // Agrega aquí más opciones de materias
  ];

  const tiposData = [
    'Maldonado',
    'Wachau',
    'Châteauneuf-du-Pape',
    'Mukhrani',
  ];

 

  const handleChange = (e) => {
    const { id, value, name, checked } = e.target;

    if (name === 'diasSemana') {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          diasSemana: [...prevData.diasSemana, id],
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          diasSemana: prevData.diasSemana.filter((dia) => dia !== id),
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleHorarioChange = (e, dia) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      horarios: {
        ...prevData.horarios,
        [dia]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 xl:w-2/4">
        <h1 className="text-gray-800 text-3xl mb-4 text-center">Agregar Empresa</h1>

        <form onSubmit={handleSubmit}>

          {/* Combobox de Materia */}
          <div className="mb-4">
            <label htmlFor="paisProductor" className="block text-gray-600 text-sm font-semibold mb-2">Pais Productor</label>
            <select
              id="paisProductor"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={formData.paisProductor}
            >
              <option value="">Seleccione un país</option>
              {materiasData.map((paisProductor) => (
                <option key={paisProductor} value={paisProductor}>
                  {paisProductor}
                </option>
              ))}
            </select>
          </div>

          {/* Combobox de Tipo */}
          <div className="mb-4">
            <label htmlFor="regionVinicola" className="block text-gray-600 text-sm font-semibold mb-2">Region Vinicola D.O</label>
            <select
              id="regionVinicola"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={formData.regionVinicola}
            >
              <option value="">Seleccione una Region</option>
              {tiposData.map((regionVinicola) => (
                <option key={regionVinicola} value={regionVinicola}>
                  {regionVinicola}
                </option>
              ))}
            </select>
          </div>

           {/* Email */}
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-600 text-sm font-semibold mb-2">Nombre</label>
          <input
            id="nombre"
            className="border p-2 rounded w-full"
            placeholder="Ingresa el nombre de la bodega"
            onChange={handleChange}
            value={formData.nombre}
          />
          </div>

           {/* Email */}
        <div className="mb-4">
          <label htmlFor="fundacionFecha" className="block text-gray-600 text-sm font-semibold mb-2">Fecha De fundación</label>
          <input
            id="fundacionFecha"
            className="border p-2 rounded w-full"
            placeholder="Ingresa la fecha de fundacion de la empresa"
            onChange={handleChange}
            value={formData.fundacionFecha}
          />
          </div>      
          

          {/* Email */}
        <div className="mb-4">
          <label htmlFor="direccion" className="block text-gray-600 text-sm font-semibold mb-2">direccion</label>
          <input
            id="direccion"
            className="border p-2 rounded w-full"
            placeholder="Ingresa la direccion de la empresa"
            onChange={handleChange}
            value={formData.direccion}
          />
          </div> 


           {/* Email */}
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-gray-600 text-sm font-semibold mb-2">Numero Telefonico</label>
          <input
            id="telefono"
            className="border p-2 rounded w-full"
            placeholder="Ingresa Un telefono de contacto"
            onChange={handleChange}
            value={formData.telefono}
          />
          </div> 

            {/* Email */}
        <div className="mb-4">
          <label htmlFor="pagina" className="block text-gray-600 text-sm font-semibold mb-2">Pagina Web</label>
          <input
            id="pagina"
            className="border p-2 rounded w-full"
            placeholder="Ingresa la pagina de la empresa"
            onChange={handleChange}
            value={formData.pagina}
          />
          </div>

          {/* Campo de Descripción */}
          <div className="mb-4">
            <label htmlFor="descripcionBodega" className="block text-gray-600 text-sm font-semibold mb-2">Descripción de Bodega</label>
            <textarea
              id="descripcionBodega"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Ingrese una descripción"
              onChange={handleChange}
              value={formData.descripcionBodega}
            />
          </div>

          {/* Campo de Descripción */}
          <div className="mb-4">
            <label htmlFor="descripcionVinos" className="block text-gray-600 text-sm font-semibold mb-2">Descripción de Vino</label>
            <textarea
              id="descripcionVinos"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Ingrese una descripción"
              onChange={handleChange}
              value={formData.descripcionVinos}
            />
          </div>

          <div className="mb-4 flex justify-between">
            <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-600">Volver</button>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Tutorship;
