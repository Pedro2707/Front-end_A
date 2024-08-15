import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import { dashboardParams } from "../constans";

const DasboardPage = () => {
  return (
    <DashboardLayout>
     <div
        className="flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.hch.tv/wp-content/uploads/2021/08/Hospital-San-Francisco-1.jpg')`,
          height: "100vh", // Mantiene la altura a 100% de la ventana
          overflow: "hidden", // Evita que aparezca la barra de desplazamiento
          margin: 0, // Elimina los márgenes
          padding: 0, // Elimina el padding
          position: "relative", // Para un mejor control del contenido
        }}
      >
      </div>
  </DashboardLayout>
);
};


export default DasboardPage;
