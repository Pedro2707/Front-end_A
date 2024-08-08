import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './compon/Menu';
import Usuario from './compon/Usuario';
import AgendarCita from './compon/Agendarcita';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/agendar-cita" element={<AgendarCita />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


