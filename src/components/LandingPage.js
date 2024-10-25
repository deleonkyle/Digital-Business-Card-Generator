import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreditCard, Share, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link

export default function LandingPage() {
  return (
    <div className="bg-light min-vh-100" style={{ margin: 0, padding: 0 }}> {/* Added inline style */}
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
            <h1 className="fw-light">Create Your Digital Business Card</h1>
            <p className="lead text-muted">
              Stand out with a modern, interactive business card that showcases your professional identity. Easy to create, easy to share.
            </p>
            <p>
              <Link to="/form" className="btn btn-dark my-2 me-2">Create Your Card</Link>
              <Link to="/learn-more" className="btn btn-outline-dark my-2">Learn More</Link>
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
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="fw-light">See it in Action</h2>
              <p className="lead">
                Our digital business cards are designed to make a lasting impression. Check out this sample to see how your card could look.
              </p>
              <a href="#view-samples" className="btn btn-outline-dark">View More Samples</a>
            </div>
            <div className="col-md-6">
            <div className="card shadow-lg mx-auto" style={{ maxWidth: '300px' }}>
  <div className="d-flex justify-content-center mt-3"> {/* Add margin-top here */}
    <img 
      src="/user.png" // Make sure this path is correct
      className="card-img-top"  
      alt="Sample Business Card" 
      style={{ width: '50%', height: 'auto', maxWidth: '100px' }} // Responsive with max width
    />
  </div>

  <div className="card-body">
    <h5 className="card-title">John Doe</h5>
    <p className="card-text">Web Developer</p>
    <p className="card-text"><small className="text-muted">john@example.com | (555) 123-4567</small></p>
  </div>
</div>

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
