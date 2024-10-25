import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreditCard, Share, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LearnMorePage() {
  return (
    <div className="bg-light min-vh-100" style={{ margin: 0, padding: 0 }}>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#a3d8af', margin: 0 }}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <CreditCard className="me-2" />
            <span className="fw-bold">Digital Card Generator</span>
          </a>
          <Link to="/get-started" className="btn btn-dark">Get Started</Link>
        </div>
      </nav>

      <header className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Learn More About Our Digital Business Card</h1>
            <p className="lead text-muted">
              Discover how our digital business cards can transform your networking experience.
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
                <h2 className="fw-normal">Customizable Design</h2>
                <p>Choose from a variety of templates and customize colors, fonts, and layout to match your brand.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <Share size={48} className="text-dark mb-3" />
                <h2 className="fw-normal">Easy Sharing</h2>
                <p>Share your digital business card via QR code, email, or any messaging platform with a single click.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center">
                <LinkIcon size={48} className="text-dark mb-3" />
                <h2 className="fw-normal">Interactive Elements</h2>
                <p>Add clickable links to your social profiles, portfolio, and contact information for instant connectivity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <h2 className="text-center fw-light">Frequently Asked Questions</h2>
          <div className="row mt-4">
            <div className="col-md-6 mx-auto">
              <h5>What is a Digital Business Card?</h5>
              <p>A digital business card is an electronic version of a traditional business card that can be easily shared and customized.</p>
              <h5>How do I create my card?</h5>
              <p>Simply navigate to the 'Create Your Card' section and fill in your details. You can then customize it to your liking.</p>
              <h5>Is it easy to share?</h5>
              <p>Yes! You can share your digital business card via QR code, email, or by simply sending a link.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5" style={{ backgroundColor: '#63836a', color: 'white' }}>
        <div className="container text-center">
          <h2 className="fw-light">Ready to Create Your Digital Business Card?</h2>
          <p className="lead">Join thousands of professionals who have already made the switch to digital.</p>
          <Link to="/get-started" className="btn btn-light btn-lg mt-3">Get Started Now</Link>
        </div>
      </div>

      <footer className="py-3" style={{ backgroundColor: '#232e25', color: 'white' }}>
        <div className="container text-center">
          <small>© 2024 Digital Business Card Generator. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}
