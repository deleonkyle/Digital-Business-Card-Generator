// src/components/BusinessCardPreview.js
import React from 'react';
import { QRCode } from 'react-qrcode-logo';
import { Card, CardContent, Typography, Box } from '@mui/material';
import './BusinessCardPreview.css';

const BusinessCardPreview = ({ data }) => {
  const { template, logo, name, jobTitle, company, email, phone, website, linkedin, twitter, color, font, qrCodeContent, nameFontSize, infoFontSize } = data;

  let qrValue;
  if (qrCodeContent === 'email') {
    qrValue = `mailto:${email}`;
  } else if (qrCodeContent === 'phone') {
    qrValue = `tel:${phone}`;
  } else {
    qrValue = website;
  }

  const cardStyle = {
    backgroundColor: color || '#fff',
    fontFamily: font || 'Arial',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  return (
    <Card className={`card-preview ${template}`} style={cardStyle}>
      <CardContent>
        {logo && <img src={logo} alt="Logo" className="logo" style={{ maxWidth: '100px', marginBottom: '10px' }} />}
        <Typography variant="h5" style={{ fontFamily: font || 'Arial', fontSize: nameFontSize || '20px' }}>{name}</Typography>
        <Typography style={{ fontFamily: font || 'Arial', fontSize: infoFontSize || '16px' }}>{jobTitle}</Typography>
        <Typography style={{ fontFamily: font || 'Arial', fontSize: infoFontSize || '16px' }}>{company}</Typography>
        <Typography style={{ fontFamily: font || 'Arial', fontSize: infoFontSize || '16px' }}>{email}</Typography>
        <Typography style={{ fontFamily: font || 'Arial', fontSize: infoFontSize || '16px' }}>{phone}</Typography>
        <Typography style={{ fontFamily: font || 'Arial', fontSize: infoFontSize || '16px' }}>{website}</Typography>
        <Typography style={{ fontFamily: font || 'Arial', fontSize: infoFontSize || '16px' }}>{linkedin}</Typography>
        <Typography style={{ fontFamily: font || 'Arial', fontSize: infoFontSize || '16px' }}>{twitter}</Typography>
        <Box sx={{ mt: 2 }}>
          <QRCode value={qrValue} size={100} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BusinessCardPreview;
