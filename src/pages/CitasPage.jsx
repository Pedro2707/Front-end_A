import React, { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { findCitaMedicaByPage } from "../api/citaMedica";
import { useParams, useNavigate } from "react-router-dom";

const CitasPage = () => {
  const { page: pageParam } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(parseInt(pageParam) || 1);
  const [citas, setCitas] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedCita, setEditedCita] = useState({});
  const totalPages = 5; // Cambia esto según el total de páginas disponibles

  useEffect(() => {
    (async () => {
      const fetchedCitas = await findCitaMedicaByPage(page);
      setCitas(fetchedCitas);
    })();
  }, [page]);

  const handleEditClick = (cita) => {
    setEditingId(cita.id);
    setEditedCita(cita);
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setEditedCita({});
  };

  const handleSaveClick = () => {
    // Aquí puedes hacer una solicitud a la API para guardar los cambios
    // Ejemplo: await saveCitaMedica(editedCita);
    setEditingId(null);
  };

  const handleChange = (e) => {
    setEditedCita({ ...editedCita, [e.target.name]: e.target.value });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    navigate(`/dashboard/citas/${newPage}`);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Citas Médicas
        </h1>

        <div className="space-y-6">
          {citas.map((cita) => (
            <div
              key={cita.id}
              className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg"
            >
              {editingId === cita.id ? (
                <>
                  <input
                    type="text"
                    name="cita"
                    value={editedCita.cita}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="fecha"
                    value={editedCita.fecha}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="doctor"
                    value={editedCita.doctor}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="doctor_telefono"
                    value={editedCita.doctor_telefono}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="doctor_correo"
                    value={editedCita.doctor_correo}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
                  />
                  <textarea
                    name="observaciones"
                    value={editedCita.observaciones}
                    onChange={handleChange}
                    className="w-full p-2 mb-2 border border-gray-300 rounded"
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
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-medium text-gray-700 mb-2">
                    {cita.cita}
                  </h2>
                  <p className="text-gray-600 mb-1">
                    <strong>Fecha:</strong> {cita.fecha}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Doctor:</strong> {cita.doctor}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Teléfono:</strong> {cita.doctor_telefono}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Correo:</strong> {cita.doctor_correo}
                  </p>
                  <p className="text-gray-600">
                    <strong>Observaciones:</strong> {cita.observaciones}
                  </p>
                  <div className="flex justify-end mt-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg"
                      onClick={() => handleEditClick(cita)}
                    >
                      Editar
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

export default CitasPage;






