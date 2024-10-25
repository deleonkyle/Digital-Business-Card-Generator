// src/App.js
import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BusinessCardForm from './components/BusinessCardForm';
import LandingPage from './components/LandingPage';
import GetStarted from './components/GetStarted';
import LearnMorePage from './components/LearnMorePage';
import './App.css';

const App = () => {
  const [cardData, setCardData] = useState(null);
  const cardRef = useRef();

  const handleCardDataSubmit = (data) => {
    setCardData(data);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/form" 
            element={<BusinessCardForm onSubmit={handleCardDataSubmit} cardData={cardData} cardRef={cardRef} />} 
          />
          <Route path="/" element={<LandingPage />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/learn-more" element={<LearnMorePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
