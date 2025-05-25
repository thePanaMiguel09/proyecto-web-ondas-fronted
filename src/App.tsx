// // src/App.tsx
// import "./App.css";
// import { Route, Routes } from "react-router-dom";

// import LoginPage from "./Pages/Login/LoginPage";
// import SignupPage from "./Pages/Signup/SignupPage";

// import Home from "./Pages/Home/HomePage";

// import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// function App() {
//   return (
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />
//       <Route path="/signup" element={<SignupPage />} />
//       <Route
//         path="/"
//         element={
//           <ProtectedRoute>
//             <Home />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;
import Dashboard from './features/Coordinador/Dashboard/Dashboard';
import NavHome from './Components/NavHome/NavHome';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHome />
      <div className="flex-1">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;