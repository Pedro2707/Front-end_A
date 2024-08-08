import React from 'react';

const DatosMedico = () => {
  return (
    <div className="mb-4">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Datos del Médico</h3>
      <form className="space-y-4">
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Nombre del Médico:</label>
          <input type="text" name="nombreMedico" className="w-full border border-gray-300 p-2 rounded-lg" />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Establecimiento de Salud:</label>
          <input type="text" name="establecimiento" className="w-full border border-gray-300 p-2 rounded-lg" />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Número de Teléfono:</label>
          <input type="text" name="telefonoMedico" className="w-full border border-gray-300 p-2 rounded-lg" />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Correo del Médico:</label>
          <input type="email" name="correoMedico" className="w-full border border-gray-300 p-2 rounded-lg" />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Observaciones:</label>
          <textarea name="observaciones" className="w-full border border-gray-300 p-2 rounded-lg" rows="3"></textarea>
        </div>
      </form>
    </div>
  );
}

export default DatosMedico;

