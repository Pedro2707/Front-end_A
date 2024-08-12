import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Usuario from './components/Usuario';
import AgendarCita from './components/Agendarcita';
import './index.css';
import { AuthProvider } from './context/authContext';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <AuthProvider>

        <div className="App">
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/agendar-cita" element={<AgendarCita />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </AuthProvider>

    </Router>

  );
}

export default App;


