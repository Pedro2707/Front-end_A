import React, { useState } from "react";
import { deleteCitaMedica, updateCitaMedica } from "../../api/citaMedica";
import { toast } from 'react-toastify';

const CitaCard = ({ cita, selectedId, handleCancel, handleEdit, handleSave, handleDelete }) => {
  const [editedCita, setEditedCita] = useState(cita);
  const handleChange = (e) => {
    setEditedCita({ ...editedCita, [e.target.name]: e.target.value });
  };

  const handleSaveClick = async () => {
    try {
      const updatedCita = await updateCitaMedica(editedCita);
      handleSave(updatedCita)
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await deleteCitaMedica(editedCita.id);
      handleDelete(editedCita.id)

    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <div
      key={cita.id}
      className="bg-white p-6 rounded-lg shadow-md transition-shadow hover:shadow-lg"
    >
      {selectedId === cita.id ? (
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
              onClick={handleCancel}
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
              onClick={() => handleEdit(cita)}
            >
              Editar
            </button>
            <button
              className=" hover:bg-red-600  font-medium py-2 px-4 rounded-lg"
              onClick={handleDeleteClick}
            >
              Eliminar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CitaCard;