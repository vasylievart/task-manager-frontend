import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = ({ setAuth }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    setAuth({ token: '', role: '' });
    navigate('/login');
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default AdminPage;