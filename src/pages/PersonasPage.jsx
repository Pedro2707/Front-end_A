import React, { useEffect, useState } from 'react';
import { findPersonaByPage } from '../api/persona';
import DashboardLayout from "../layout/DashboardLayout";
import { useParams, useNavigate } from "react-router-dom";

const PersonasPage = () => {
  const [personas, setPersonas] = useState([]);
  const [page, setPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editedPersona, setEditedPersona] = useState({});
  const navigate = useNavigate();
  const totalPages = 5;

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const data = await findPersonaByPage(page);
        setPersonas(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPersonas();
  }, [page]);

  const handleEditClick = (persona) => {
    setEditingId(persona.id);
    setEditedPersona(persona);
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setEditedPersona({});
  };

  const handleSaveClick = () => {
    // Aquí puedes hacer una solicitud a la API para guardar los cambios
    // Ejemplo: await savePersona(editedPersona);
    setEditingId(null);
  };

  const handleChange = (e) => {
    setEditedPersona({ ...editedPersona, [e.target.name]: e.target.value });
  };

  const handleDeleteClick = (id) => {
    // Aquí puedes hacer una solicitud a la API para eliminar la persona
    // Ejemplo: await deletePersona(id);
    console.log(`Eliminando persona con id: ${id}`);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    navigate(`/dashboard/personas/${newPage}`);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Lista de Personas
        </h1>
        <div className="space-y-6">
          {personas.map((persona) => (
            <div
              key={persona.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {editingId === persona.id ? (
                <>
                  <input
                    type="text"
                    name="nombre"
                    value={editedPersona.nombre}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                    placeholder="Nombre"
                  />
                  <input
                    type="text"
                    name="dni"
                    value={editedPersona.dni}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                    placeholder="DNI"
                  />
                  <input
                    type="number"
                    name="edad"
                    value={editedPersona.edad}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                    placeholder="Edad"
                  />
                  <input
                    type="text"
                    name="procedencia"
                    value={editedPersona.procedencia}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                    placeholder="Procedencia"
                  />
                  <input
                    type="text"
                    name="telefono"
                    value={editedPersona.telefono}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                    placeholder="Teléfono"
                  />
                  <input
                    type="text"
                    name="profesion"
                    value={editedPersona.profesion}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                    placeholder="Profesión"
                  />
                  <textarea
                    name="diagnostico"
                    value={editedPersona.diagnostico}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                    placeholder="Diagnóstico"
                  />
                  <div className="flex justify-end space-x-4 mt-4">
                    <button
                      className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg"
                      onClick={handleSaveClick}
                    >
                      Guardar
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg"
                      onClick={handleCancelClick}
                    >
                      Cancelar
                    </button>
                    <button
                      className="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-lg"
                      onClick={() => handleDeleteClick(persona.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-medium text-gray-700 mb-2">
                    {persona.nombre}
                  </h2>
                  <p className="text-gray-600 mb-1">
                    <strong>DNI:</strong> {persona.dni}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Edad:</strong> {persona.edad}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Procedencia:</strong> {persona.procedencia}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Teléfono:</strong> {persona.telefono}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Profesión:</strong> {persona.profesion}
                  </p>
                  <p className="text-gray-600">
                    <strong>Diagnóstico:</strong> {persona.diagnostico}
                  </p>
                  <div className="flex justify-end mt-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
                      onClick={() => handleEditClick(persona)}
                    >
                      Editar
                    </button>
                    <button
                      className="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-lg"
                      onClick={() => handleDeleteClick(persona.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`mx-1 px-4 py-2 rounded-lg font-medium ${
                page === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
              } transition-colors`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg disabled:opacity-50"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Anterior
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Siguiente
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PersonasPage;
