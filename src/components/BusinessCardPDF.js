// src/components/BusinessCardPDF.js
import React from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Button } from '@mui/material';
import { Download } from 'lucide-react'; // Import Download icon from Lucide

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
    <Button 
      variant="contained" 
      style={{
        backgroundColor: '#63836a', // Primary color
        color: '#fff', // Text color for better contrast
        '&:hover': {
          backgroundColor: '#a3d8af', // Lighter shade on hover
        }
      }} 
      onClick={handleDownloadPDF}
    >
      <Download size={18} className="me-2" /> {/* Use Lucide Download icon */}
      Download PDF
    </Button>
  );
});

export default BusinessCardPDF;
