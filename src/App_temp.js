//import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/HomePage';
import Login from './pages/LoginForm';
import Register from './pages/RegisterForm';
import UserDashboard from './pages/User_Dashboard';
import AdminDashboard from './pages/Admin_Dashboard';
import ProtectedRoute from './components/protectedRout';
import Logout from './pages/Logout';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-dashboard" element={<ProtectedRoute role="user"><UserDashboard /></ProtectedRoute>} />
          <Route path="/admin-dashboard" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;