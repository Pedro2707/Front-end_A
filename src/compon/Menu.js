import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-4xl font-bold text-white mb-8">Bienvenidos al Hospital General San Franciso</h1>
      <div className="flex flex-col space-y-4">
        <Link to="/usuario" className="w-full max-w-xs">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 w-full">
            Usuario
          </button>
        </Link>
        <Link to="/agendar-cita" className="w-full max-w-xs">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transform transition-all duration-300 hover:scale-105 w-full">
            Agendar Cita
          </button>
        </Link>
      </div>
      <div className="mt-8 text-gray-400">
        <p>Seleccione una opción para continuar</p>
      </div>
    </div>
  );
}

export default Menu;


