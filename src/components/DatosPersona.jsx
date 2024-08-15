import React, { useState } from 'react';
import { findPersonaByDni } from '../api/persona';
import { toast } from 'react-toastify';

const DatosPersona = () => {
  const [persona, setPersona] = useState(undefined);
  const handleValidateDni = async() => {
    try {
      const dni = document.getElementById('dniInputValidate').value;
      if (!dni) {
        toast.info('Debe ingresar un DNI.');
        return
      }
      const foundPersona = await findPersonaByDni(document.getElementById('dniInputValidate').value);
      if (!foundPersona) {
        toast.info('Persona no encontrada.');
      } else {
        setPersona(foundPersona);
      }
    } catch (error) {
      toast.error(error.message);
      setPersona(undefined);
    }
  }
  return (
    <div className="mb-4">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex justify-between items-center">
        Datos de la Persona
        <button onClick={handleValidateDni} className="bg-blue-500 text-white px-4 py-2 rounded-lg">Validar</button>
      </h3>
      <form className="space-y-4">
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Número de Identidad:</label>
          <input
            id='dniInputValidate' 
            type="text" 
            name="dni" 
            className="w-full border border-gray-300 p-2 rounded-lg" 
            placeholder="Ingrese el ID de la persona" 
          />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Nombre Completo:</label>
          <input 
            type="text" 
            name="nombreCompleto" 
            className="w-full border border-gray-300 p-2 rounded-lg" 
            placeholder="Ingrese el nombre completo" 
            value={persona?.nombre}
            id="nombreInput"

          />
        </div>

        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Edad:</label>
          <input 
            type="text" 
            name="edad" 
            className="w-full border border-gray-300 p-2 rounded-lg" 
            placeholder="Ingrese la edad" 
            value={persona?.edad}
            id="edadInput"

          />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Procedencia:</label>
          <input 
            type="text" 
            name="procedencia" 
            className="w-full border border-gray-300 p-2 rounded-lg" 
            placeholder="Ingrese la procedencia" 
            value={persona?.procedencia}
            id="procedenciaInput"

          />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Teléfono o Celular:</label>
          <input 
            type="tel" 
            name="telefono" 
            className="w-full border border-gray-300 p-2 rounded-lg" 
            placeholder="Ingrese el número de teléfono o celular" 
            value={persona?.telefono}
            id="telefonoInput"

          />
        </div>
        <div className="border rounded-lg shadow-md p-4 bg-gray-50">
          <label className="block text-gray-700">Profesión u Oficio:</label>
          <input 
            type="text" 
            name="profesion" 
            className="w-full border border-gray-300 p-2 rounded-lg" 
            placeholder="Ingrese la profesión u oficio" 
            value={persona?.profesion}
            id="profesionInput"

          />
        </div>
      </form>
    </div>
  );
}

export default DatosPersona;

