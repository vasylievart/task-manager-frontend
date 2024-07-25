import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';

function App() {
  const [auth, setAuth] = useState({ token: '', role: '' });

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={auth.token ? <Dashboard auth={auth} /> : <Navigate to="/login" />} />
        <Route path="/admin" element={auth.token && auth.role === 'admin' ? <AdminPage setAuth={setAuth} /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;