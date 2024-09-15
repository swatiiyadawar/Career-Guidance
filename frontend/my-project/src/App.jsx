// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';  // Importing the new Navbar component

function App() {
  return (
    <Router>
      <div>
        <Navbar />  {/* This will display the navbar on all routes Cuse it is our main nevbar make note @SWATI*/}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
