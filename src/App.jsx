// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import AdminDashboard from "./pages/AdminDashboard";
import RequestsPage from "./pages/RequestsPage";
import FeedbackPage from "./pages/FeedbackPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navigation from "./components/Navigation";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsAuthenticated(true);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("token", "sample-token");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated && <Navigation onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage onSignup={handleLogin} />}
        />
        <Route
          path="/"
          element={
            isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/profile"
          element={
            isAuthenticated ? <ProfilePage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/admin"
          element={
            isAuthenticated ? <AdminDashboard /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/requests"
          element={
            isAuthenticated ? <RequestsPage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/feedback"
          element={
            isAuthenticated ? <FeedbackPage /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;