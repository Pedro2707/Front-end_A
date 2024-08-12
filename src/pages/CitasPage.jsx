import React, { useEffect, useState } from "react"
import DashboardLayout from "../layout/DashboardLayout"
import { findCitaMedicaByPage } from "../api/citaMedica";
import { useParams } from "react-router-dom";
const CitasPage = () => {
  const params = useParams();
  const [page, setPage] = useState(params.page);
  const [citas, setCitas] = useState([]);
  console.log("🚀 ~ CitasPage ~ citas:", citas)
  useEffect(() => {
    (async () => {
      setCitas(await findCitaMedicaByPage(page));
    })()
  }, [page]);
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
    </DashboardLayout>
  )
}

export default CitasPage