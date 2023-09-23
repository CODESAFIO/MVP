import React, { useState } from 'react';

function Tutorship() {
  const [formData, setFormData] = useState({
    universidad: '',
    facultad: '',
    carrera: '',
    materia: '',
    tipo: '',
    modalidad: '',
    descripcion: '', // Nuevo campo de descripción
    diasSemana: [],
    horarios: {},
  });

  const [showPassword, setShowPassword] = useState(false);

  const diasSemanaData = [
    { id: 'lunes', label: 'Lunes' },
    { id: 'martes', label: 'Martes' },
    { id: 'miercoles', label: 'Miércoles' },
    { id: 'jueves', label: 'Jueves' },
    { id: 'viernes', label: 'Viernes' },
    { id: 'sabado', label: 'Sábado' },
    { id: 'domingo', label: 'Domingo' },
  ];

  const materiasData = [
    'Materia 1',
    'Materia 2',
    'Materia 3',
    // Agrega aquí más opciones de materias
  ];

  const tiposData = [
    'Particular',
    'Grupal',
  ];

  const modalidadesData = [
    'Online',
    'Presencial',
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
        <h1 className="text-gray-800 text-3xl mb-4 text-center">Agregar Tutoria</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2">Días de la Semana</label>
            <div className="flex gap-4">
              {diasSemanaData.map((dia) => (
                <label key={dia.id}>
                  <input
                    type="checkbox"
                    id={dia.id}
                    name="diasSemana"
                    value={dia.id}
                    onChange={handleChange}
                    checked={formData.diasSemana.includes(dia.id)}
                  />
                  {dia.label}
                </label>
              ))}
            </div>
          </div>

          {formData.diasSemana.map((dia) => (
            <div className="mb-4" key={dia}>
              <label htmlFor={dia} className="block text-gray-600 text-sm font-semibold mb-2">{dia}</label>
              <input
                type="text"
                id={dia}
                name={dia}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder={`Ingrese el horario para ${dia}`}
                onChange={(e) => handleHorarioChange(e, dia)}
                value={formData.horarios[dia] || ''}
              />
            </div>
          ))}

          {/* Combobox de Materia */}
          <div className="mb-4">
            <label htmlFor="materia" className="block text-gray-600 text-sm font-semibold mb-2">Materia</label>
            <select
              id="materia"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={formData.materia}
            >
              <option value="">Seleccione una materia</option>
              {materiasData.map((materia) => (
                <option key={materia} value={materia}>
                  {materia}
                </option>
              ))}
            </select>
          </div>

          {/* Combobox de Tipo */}
          <div className="mb-4">
            <label htmlFor="tipo" className="block text-gray-600 text-sm font-semibold mb-2">Tipo</label>
            <select
              id="tipo"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={formData.tipo}
            >
              <option value="">Seleccione un tipo</option>
              {tiposData.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>

          {/* Combobox de Modalidad */}
          <div className="mb-4">
            <label htmlFor="modalidad" className="block text-gray-600 text-sm font-semibold mb-2">Modalidad</label>
            <select
              id="modalidad"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={formData.modalidad}
            >
              <option value="">Seleccione una modalidad</option>
              {modalidadesData.map((modalidad) => (
                <option key={modalidad} value={modalidad}>
                  {modalidad}
                </option>
              ))}
            </select>
          </div>

          {/* Campo de Descripción */}
          <div className="mb-4">
            <label htmlFor="descripcion" className="block text-gray-600 text-sm font-semibold mb-2">Descripción</label>
            <textarea
              id="descripcion"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Ingrese una descripción"
              onChange={handleChange}
              value={formData.descripcion}
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
