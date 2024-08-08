import React from 'react';

const DatosPersona = () => {
  return (
    <div className="mb-4">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Datos de la Persona</h3>
      <form className="space-y-4">
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Nombre Completo:</label>
          <input type="text" name="nombreCompleto" className="w-full border border-gray-300 p-2 rounded-lg" />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Número de Identidad:</label>
          <input type="text" name="numeroIdentidad" className="w-full border border-gray-300 p-2 rounded-lg" />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Edad:</label>
          <input type="text" name="edad" className="w-full border border-gray-300 p-2 rounded-lg" />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Procedencia:</label>
          <input type="text" name="procedencia" className="w-full border border-gray-300 p-2 rounded-lg" />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Teléfono o Celular:</label>
          <input type="text" name="telefono" className="w-full border border-gray-300 p-2 rounded-lg" />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Profesión u Oficio:</label>
          <input type="text" name="profesion" className="w-full border border-gray-300 p-2 rounded-lg" />
        </div>
      </form>
    </div>
  );
}

export default DatosPersona;

