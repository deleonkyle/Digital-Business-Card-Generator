// src/components/Navbar.js
import React from 'react';
import { CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#a3d8af' }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <CreditCard className="me-2" />
          <span className="fw-bold">Digital Card Generator</span>
        </a>
        <Link to="/get-started" className="btn btn-dark">Get Started</Link> {/* Use Link here */}
      </div>
    </nav>
  );
};

export default Navbar;
