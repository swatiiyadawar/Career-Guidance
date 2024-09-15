// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignIn from './components/SignIn'; // Fixed import path
import Pathways from './components/Pathways';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path='/pathways' element={<Pathways/>} />
      </Routes>
    </Router>
  );
}

export default App;
