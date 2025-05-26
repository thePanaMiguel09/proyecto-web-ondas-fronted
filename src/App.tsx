// src/App.tsx
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";
import SignupPage from "./Pages/Signup/SignupPage";
import Home from "./Pages/Home/HomePage";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import GestorDocente from "./Pages/ManageTeacher/GestorDocente";
import DashboardEs from "./Pages/Estudiante/Dashboard/DashboardEs";
import Dashboard from "./Pages/Coordinador/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/gestor-docente"
        element={
          <ProtectedRoute>
            <GestorDocente />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mis-proyectos"
        element={
          <ProtectedRoute>
            <DashboardEs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/gestor-coordinador"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
     
    </Routes>
  );
}

export default App;
