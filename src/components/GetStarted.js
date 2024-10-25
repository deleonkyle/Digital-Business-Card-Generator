// src/components/GetStarted.js
import React from 'react';
import { CreditCard, Share, Link } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'; // Import your Navbar component

const GetStarted = () => {
  return (
    <div className="bg-light min-vh-100">
      <Navbar /> {/* Include the Navbar */}

      <header className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Get Started with Your Digital Business Card</h1>
            <p className="lead text-muted">
              Follow the simple steps below to create your unique digital business card.
            </p>
          </div>
        </div>
      </header>

      <div className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="text-center">
                <CreditCard size={48} className="text-dark mb-3" />
                <h2 className="fw-normal">Step 1: Choose a Template</h2>
                <p>Select a template that fits your style from our variety of options.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <Share size={48} className="text-dark mb-3" />
                <h2 className="fw-normal">Step 2: Customize Your Card</h2>
                <p>Add your personal information, including name, job title, and contact details.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <Link size={48} className="text-dark mb-3" />
                <h2 className="fw-normal">Step 3: Share Your Card</h2>
                <p>Once created, share your digital business card through various platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5" style={{ backgroundColor: '#63836a', color: 'white' }}>
        <div className="container text-center">
          <h2 className="fw-light">Ready to Create Your Digital Business Card?</h2>
          <p className="lead">Join thousands of professionals who have already made the switch to digital.</p>
          <a href="/form" className="btn btn-light btn-lg mt-3">Get Started Now</a>
        </div>
      </div>

      <footer className="py-3" style={{ backgroundColor: '#232e25', color: 'white' }}>
        <div className="container text-center">
          <small>© 2024 Digital Business Card Generator. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
};

export default GetStarted;
