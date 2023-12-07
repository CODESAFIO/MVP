import React, { useState } from 'react';

function ProduccionAnual() {
  const [formData, setFormData] = useState({
    paisProductor: '',
    regionVinicola: '',
    bodega: '', // Nuevo campo de descripción
    nombre: '',
    fundacionFecha: '', 
    direccion: '',
    telefono: '',
    pagina: '',
    Calificacion: '',  
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

  const bodegaData = [
    'Bodega Garzón',
    'Domäne Wachau',
    'Château de Beaucastel',
    'Château Mukhrani',
  ];


  const vinoData = [
    'Vino 1',
    'Vino 2',
    'Vino 3',
    'Vino 4',
  ];


  const CalificacionData = [
    'E',
    'MB',
    'M',
    'R',
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
        <h1 className="text-gray-800 text-3xl mb-4 text-center">Agregar Añada</h1>

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


                {/* Combobox de Tipo */}
          <div className="mb-4">
            <label htmlFor="empresa" className="block text-gray-600 text-sm font-semibold mb-2">Empresa</label>
            <select
              id="empresa"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={formData.empresa}
            >
              <option value="">Seleccione una Bodega</option>
              {bodegaData.map((empresa) => (
                <option key={empresa} value={empresa}>
                  {empresa}
                </option>
              ))}
            </select>
          </div>


                {/* Combobox de Tipo */}
                <div className="mb-4">
            <label htmlFor="vino" className="block text-gray-600 text-sm font-semibold mb-2">Vino</label>
            <select
              id="vino"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={formData.vino}
            >
              <option value="vino">Seleccione un Vino</option>
              {vinoData.map((vino) => (
                <option key={vino} value={vino}>
                  {vino}
                </option>
              ))}
            </select>
          </div>


           {/* Email */}
        <div className="mb-4">
          <label htmlFor="Año" className="block text-gray-600 text-sm font-semibold mb-2">Año</label>
          <input
            id="Año"
            className="border p-2 rounded w-full"
            placeholder="Ingresa el Año de produccion"
            onChange={handleChange}
            value={formData.Año}
          />
          </div>

           {/* Email */}
        <div className="mb-4">
          <label htmlFor="hectoExportados" className="block text-gray-600 text-sm font-semibold mb-2">Total Hectolitros Exportados</label>
          <input
            id="hectoExportados"
            className="border p-2 rounded w-full"
            placeholder=""
            onChange={handleChange}
            value={formData.hectoExportados}
          />
          </div>      


           {/* Email */}
        <div className="mb-4">
          <label htmlFor="totalBotellas" className="block text-gray-600 text-sm font-semibold mb-2">Total Botellas</label>
          <input
            id="totalBotellas"
            className="border p-2 rounded w-full"
            placeholder="Ingresa total de Botellas producidas"
            onChange={handleChange}
            value={formData.totalBotellas}
          />
          </div> 


              {/* Combobox de Tipo */}
              <div className="mb-4">
            <label htmlFor="Calificacion" className="block text-gray-600 text-sm font-semibold mb-2">Calificación</label>
            <select
              id="Calificacion"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={formData.Calificacion}
            >
              <option value="Calificacion">Seleccione una Calificación</option>
              {CalificacionData.map((Calificacion) => (
                <option key={Calificacion} value={Calificacion}>
                  {Calificacion}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4 flex justify-between">
            <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded-full hover:bg-gray-600">Volver</button>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProduccionAnual;
