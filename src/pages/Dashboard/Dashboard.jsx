import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <div className="nav-brand">
          <h1>ERP System</h1>
        </div>
        <div className="nav-user">
          <span>Welcome, {user?.name || user?.email || 'User'}</span>
          <button onClick={logout} className="logout-btn">Logout</button>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2>Dashboard</h2>
          <p>Welcome to your ERP system dashboard</p>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">📊</div>
            <h3>Analytics</h3>
            <p>View your business analytics and reports</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">👥</div>
            <h3>Users</h3>
            <p>Manage users and permissions</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📦</div>
            <h3>Inventory</h3>
            <p>Track and manage inventory</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">💰</div>
            <h3>Finance</h3>
            <p>Financial reports and transactions</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📋</div>
            <h3>Orders</h3>
            <p>Manage customer orders</p>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">⚙️</div>
            <h3>Settings</h3>
            <p>Configure system settings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
