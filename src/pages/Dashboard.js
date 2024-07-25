import React from 'react';

const Dashboard = ({ auth }) => (
  <div>
    <h1>Dashboard</h1>
    <p>Welcome, {auth.role}!</p>
  </div>
);

export default Dashboard;