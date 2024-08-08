import React from 'react';

const DetallesCitaMedica = () => {
  return (
    <div className="mb-4">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Detalles de la Cita Médica</h3>
      <form className="space-y-4">
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Especialidad Médica:</label>
          <select name="especialidad" className="w-full border border-gray-300 p-2 rounded-lg">
            <option value="">Seleccionar</option>
            <option value="medicina_interna">Medicina Interna</option>
            <option value="cirugia">Cirugía</option>
            <option value="ortopedia">Ortopedia</option>
            <option value="pediatria">Pediatría</option>
            <option value="ginecologia">Ginecología</option>
            <option value="psicologia">Psicología</option>
            <option value="odontologia">Odontología</option>
            <option value="geratria">Geriatría</option>
            <option value="inmunologia">Inmunología</option>
            <option value="cirugia_plastica">Cirugía Plástica</option>
          </select>
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Fecha:</label>
          <input type="date" name="fecha" className="w-full border border-gray-300 p-2 rounded-lg" />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Hora:</label>
          <input type="time" name="hora" className="w-full border border-gray-300 p-2 rounded-lg" defaultValue="08:00" />
        </div>
      </form>
    </div>
  );
}

export default DetallesCitaMedica;


