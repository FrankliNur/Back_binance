//import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/HomePage';
import Login from './pages/LoginForm';
import Register from './pages/RegisterForm';
import UserDashboard from './pages/User_Dashboard';
import AdminDashboard from './pages/Admin_Dashboard';

const App = () => {
  const getDashboardComponent = () => {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      return <AdminDashboard />;
    } else if (role === 'user') {
      return <UserDashboard />;
    } else {
      return <Home />;
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={getDashboardComponent()} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;