import React, { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { findCitaMedicaByPage } from "../api/citaMedica";
import { useParams, useNavigate } from "react-router-dom";
import CitaCard from "../components/dashboard/CitaCard";
import { toast } from 'react-toastify';

const CitasPage = () => {
  const { page: pageParam } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(parseInt(pageParam) || 1);
  const [citas, setCitas] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [editedCita, setEditedCita] = useState({});
  const totalPages = 5; // Cambia esto según el total de páginas disponibles

  useEffect(() => {
    (async () => {
      const fetchedCitas = await findCitaMedicaByPage(page);
      setCitas(fetchedCitas);
    })();
  }, [page, JSON.stringify(citas) ]);
  const handleSelectedId = (id) => {
    setSelectedId(id);
  };
  const handleEdit = (cita) => {
    handleSelectedId(cita.id);
    setEditedCita(cita);
  };

  const handleCancel = () => {
    handleSelectedId(null);
    setEditedCita({});
  };
 
  const handlePageChange = (newPage) => {
    setPage(newPage);
    navigate(`/dashboard/citas/${newPage}`);
  };
  const handleSave =(updatedCita) =>{
    setCitas(citas.map((cita) => (cita.id === updatedCita.id ? updatedCita : cita)));
    handleSelectedId(null);
    toast.success('Cita actuaizada correctamente');
  }
const handleDelete = async () => {
  setCitas(citas.filter((cita) => cita.id !== editedCita.id));
  toast.success('Cita eliminada correctamente');
}
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Citas Médicas
        </h1>

        <div className="space-y-6">
          {citas.map((cita) => <CitaCard key={`cita.${cita.id}`} cita={cita} selectedId={selectedId} handleSelectedId={handleSelectedId} handleCancel={handleCancel} handleEdit={handleEdit} handleSave={handleSave} handleDelete={handleDelete} />)}
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






