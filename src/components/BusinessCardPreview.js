import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { Phone, Mail, Globe, Linkedin, Twitter } from 'lucide-react';
import './BusinessCardPreview.css';

const BusinessCardPreview = ({ data }) => {
  const {
    template,
    logo,
    name,
    jobTitle,
    company,
    email,
    phone,
    website,
    linkedin,
    twitter,
    color,
    font,
    qrCodeContent,
    nameFontSize,
    infoFontSize,
    bgColor,
    buttonColor,
    textColor
  } = data;

  // Determine QR code content value
  let qrValue;
  if (qrCodeContent === 'email') {
    qrValue = `mailto:${email}`;
  } else if (qrCodeContent === 'phone') {
    qrValue = `tel:${phone}`;
  } else {
    qrValue = website;
  }

  // Style configurations based on provided data
  const cardStyle = {
    backgroundColor: bgColor || color || '#f5f5f5',
    fontFamily: font || 'Arial',
    padding: '24px',  // Reduced padding
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    border: template === 'classic' ? '1px solid #ccc' : 'none',
  };

  const appliedTextColor = textColor || (template === 'modern' ? '#fff' : template === 'classic' ? '#333' : '#000');
  const appliedButtonColor = buttonColor || (template === 'modern' ? '#444' : '#eee');

  return (
    <Card className={`card-preview ${template}`} style={cardStyle}>
      <CardContent>
        {/* Company Info Container */}
        <Box
          sx={{
            backgroundColor: appliedButtonColor,
            borderRadius: '10px',
            padding: '10px',  // Reduced padding
            marginTop: '10px' // Reduced margin
          }}
        >
          {/* Logo with Round Styling */}
          {logo && (
            <Box
              component="img"
              src={logo}
              alt="Logo"
              className="logo"
              sx={{
                width: '90px',  // Reduced width
                height: '90px', // Reduced height
                borderRadius: '50%',
                marginBottom: '15px',
                objectFit: 'cover'
              }}
            />
          )}
          
          {/* Name and Job Title */}
          <Typography variant="h6" style={{ fontFamily: font || 'Arial', fontSize: nameFontSize || '18px', color: appliedTextColor }}>
            {name}
          </Typography>
          <Typography style={{ fontFamily: font || 'Arial', fontSize: infoFontSize || '14px', color: appliedTextColor }}>
            {jobTitle}
          </Typography>
          <Typography style={{ fontFamily: font || 'Arial', fontSize: infoFontSize || '14px', color: appliedTextColor, marginBottom: '8px' }}>
            {company}
          </Typography>

          {/* Contact Details in Buttons */}
          <Box display="flex" justifyContent="center" gap={0.5} flexWrap="wrap">
            {email && (
              <Button
                variant="contained"
                startIcon={<Mail size={14} />}
                sx={{ backgroundColor: appliedButtonColor, color: appliedTextColor, textTransform: 'none', padding: '5px 10px' }}
              >
                {email}
              </Button>
            )}
            {phone && (
              <Button
                variant="contained"
                startIcon={<Phone size={14} />}
                sx={{ backgroundColor: appliedButtonColor, color: appliedTextColor, textTransform: 'none', padding: '5px 10px' }}
              >
                {phone}
              </Button>
            )}
            {website && (
              <Button
                variant="contained"
                startIcon={<Globe size={14} />}
                sx={{ backgroundColor: appliedButtonColor, color: appliedTextColor, textTransform: 'none', padding: '5px 10px' }}
              >
                {website}
              </Button>
            )}
            {linkedin && (
              <Button
                variant="contained"
                startIcon={<Linkedin size={14} />}
                sx={{ backgroundColor: appliedButtonColor, color: appliedTextColor, textTransform: 'none', padding: '5px 10px' }}
              >
                LinkedIn
              </Button>
            )}
            {twitter && (
              <Button
                variant="contained"
                startIcon={<Twitter size={14} />}
                sx={{ backgroundColor: appliedButtonColor, color: appliedTextColor, textTransform: 'none', padding: '5px 10px' }}
              >
                Twitter
              </Button>
            )}
          </Box>

          {/* QR Code */}
          <Box sx={{ mt: 1 }}>
            <QRCode value={qrValue} size={100} />  {/* Reduced QR Code size */}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BusinessCardPreview;
