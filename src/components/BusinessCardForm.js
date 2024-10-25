import React, { useState, useRef } from 'react';
import { Form, Button, Row, Col, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CreditCard, Upload, Share2 } from 'lucide-react'; // Add Share2 icon
import BusinessCardPreview from './BusinessCardPreview';
import BusinessCardPDF from './BusinessCardPDF';
import Navbar from './Navbar'; // Import the Navbar component

export default function BusinessCardForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    website: '',
    linkedin: '',
    twitter: '',
    template: 'classic',
    color: '#ffffff',
    font: 'Arial',
    qrCodeContent: 'website',
    nameFontSize: '20px',
    infoFontSize: '16px',
  });
  const [logoPreview, setLogoPreview] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const cardRef = useRef();
  const fileInputRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
        setFormData((prev) => ({ ...prev, logo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  const handleShare = () => {
    const shareData = {
      title: `${formData.name}'s Business Card`,
      text: `Check out my business card! \n\nName: ${formData.name} \nEmail: ${formData.email} \nWebsite: ${formData.website}`,
      url: `${window.location.origin}/card/${formData.name}`, // Update with your shareable link
    };

    // Check if the Web Share API is supported
    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Share successful'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback to copy link to clipboard
      navigator.clipboard.writeText(shareData.url).then(() => {
        alert('Shareable link copied to clipboard!');
      }).catch(err => console.error('Could not copy text: ', err));
    }
  };

  return (
    <>
      <Navbar /> {/* Include the Navbar component */}
      <Container fluid className="py-5" style={{ backgroundColor: '#fffff' }}>
        <Row>
          <Col md={6}>
            <Card className="shadow-sm" style={{ backgroundColor: '#ffffff' }}>
              <Card.Body>
                <h2 className="mb-4 fw-bold">Create Your Business Card</h2>
                <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Job Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Website</Form.Label>
                      <Form.Control
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>LinkedIn URL</Form.Label>
                      <Form.Control
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Twitter URL</Form.Label>
                      <Form.Control
                        type="url"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Upload Logo</Form.Label>
                  <div className="d-flex align-items-center">
                    <Button
                        variant="primary" // Changed to 'primary' for consistency
                        style={{ backgroundColor: '#63836a', borderColor: '#63836a' }} // Added styles
                        onClick={() => fileInputRef.current.click()}
                      >
                        <Upload size={18} className="me-2" />
                        {logoPreview ? 'Change Logo' : 'Upload Logo'}
                      </Button>
                    {logoPreview && (
                      <span className="ms-3 text-muted">Logo uploaded</span>
                    )}
                  </div>
                  <Form.Control
                    type="file"
                    ref={fileInputRef}
                    className="d-none"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Template</Form.Label>
                      <Form.Select
                        name="template"
                        value={formData.template}
                        onChange={handleInputChange}
                      >
                        <option value="classic">Classic</option>
                        <option value="modern">Modern</option>
                        <option value="minimal">Minimal</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Card Background Color</Form.Label>
                      <Form.Control
                        type="color"
                        name="color"
                        value={formData.color}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Font</Form.Label>
                      <Form.Select
                        name="font"
                        value={formData.font}
                        onChange={handleInputChange}
                      >
                        <option value="Arial">Arial</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Tahoma">Tahoma</option>
                        <option value="Trebuchet MS">Trebuchet MS</option>
                        <option value="Impact">Impact</option>
                        <option value="Comic Sans MS">Comic Sans MS</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>QR Code Content</Form.Label>
                      <Form.Select
                        name="qrCodeContent"
                        value={formData.qrCodeContent}
                        onChange={handleInputChange}
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="website">Website</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                  <Button variant="primary" type="submit" className="w-100 mt-3" style={{ backgroundColor: '#63836a', borderColor: '#63836a' }}>
                    <CreditCard size={18} className="me-2" />
                    Generate Card
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
  {showPreview && (
    <Card className="shadow-sm" style={{ backgroundColor: '#ffffff' }}>
      <Card.Body>
        <h3 className="mb-4 fw-bold">Business Card Preview</h3>
        <div ref={cardRef}>
          <BusinessCardPreview data={formData} />
        </div>
        <div className="mt-4 d-flex justify-content-between">
          <BusinessCardPDF cardRef={cardRef} />
          <Button
            variant="primary"
            style={{ backgroundColor: '#63836a', borderColor: '#63836a' }}
            onClick={handleShare}
          >
            <Share2 size={18} className="me-2" />
            Share My Card
          </Button>
        </div>
      </Card.Body>
    </Card>
  )}
</Col>

        </Row>
      </Container>

      <footer className="py-3" style={{ backgroundColor: '#232e25', color: 'white' }}>
        <div className="container text-center">
          <small>© 2024 Digital Business Card Generator. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}
