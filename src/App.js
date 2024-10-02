// src/App.js
import React, { useState, useRef } from 'react';
import BusinessCardForm from './components/BusinessCardForm';
import './App.css';

const App = () => {
  const [cardData, setCardData] = useState(null);
  const cardRef = useRef();

  const handleCardDataSubmit = (data) => {
    setCardData(data);
  };

  return (
    <div className="App">
      <h1>Business Card Generator</h1>
      <BusinessCardForm onSubmit={handleCardDataSubmit} cardData={cardData} cardRef={cardRef} />
    </div>
  );
};

export default App;
