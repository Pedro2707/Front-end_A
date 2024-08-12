import React, { useEffect, useState } from "react"
import DashboardLayout from "../layout/DashboardLayout"
import { findCitaMedicaByPage } from "../api/citaMedica";
import { useParams, useNavigate } from "react-router-dom";
const CitasPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(params.page);
  const [citas, setCitas] = useState([]);
  console.log("🚀 ~ CitasPage ~ citas:", citas)
  useEffect(() => {
    (async () => {
      setCitas(await findCitaMedicaByPage(page));
    })()
  }, [page]);

  const handlePage = (page) => {
    navigate(`/dashboard/citas/${page}`);
    setPage(page);
  }
  
  const handlePageChange = (event) => {
    const newPage = event.target.value;
    handlePage(newPage);
  }

  return (
    <DashboardLayout>
      <h1>CitasPage</h1>
      <form className="mt-4">
        {citas.map(cita => (
          <div key={cita.id} className="mb-4">
            <h2 className="text-lg font-bold">{cita.cita}</h2>
            <p className="text-gray-500">{cita.fecha}</p>
            <p className="text-gray-500">{cita.doctor}</p>
            <p className="text-gray-500">{cita.doctor_telefono}</p>
            <p className="text-gray-500">{cita.observaciones}</p>
            <p className="text-gray-500">{cita.doctor_correo}</p>
          </div>
        ))}
      </form>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handlePage(parseInt(page) - 1)}
          disabled={parseInt(page) === 1}
        >
          Previous
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handlePage(parseInt(page) + 1)}
        >
          Next
        </button>
      </div>
    </DashboardLayout>
  )
}

export default CitasPage