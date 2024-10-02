// src/components/BusinessCardPDF.js
import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@mui/material';

const BusinessCardPDF = React.forwardRef(({ cardRef }, ref) => {
  const handleDownloadPDF = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10);
      pdf.save('business-card.pdf');
    });
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleDownloadPDF}>
      Download PDF
    </Button>
  );
});

export default BusinessCardPDF;
