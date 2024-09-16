// src/App.jsx
<<<<<<< HEAD

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';  // Importing the new Navbar component
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignIn from './components/SignIn'; // Fixed import path
import Pathways from './components/Pathways';
>>>>>>> main

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div>
        <Navbar />  {/* This will display the navbar on all routes Cuse it is our main nevbar make note @SWATI*/}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
=======
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path='/pathways' element={<Pathways/>} />
      </Routes>
>>>>>>> main
    </Router>
  );
}

export default App;
