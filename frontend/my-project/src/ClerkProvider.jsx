// src/ClerkProvider.js
import React from 'react';
import { ClerkProvider, RedirectToSignIn, useUser } from '@clerk/clerk-react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SignIn } from '@clerk/clerk-react';
import HomePage from './components/HomePage'; // Adjust the path as needed

const clerkFrontendApi = 'YOUR_FRONTEND_API'; // Replace with your Clerk Frontend API

function App() {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<RedirectToSignIn />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

export default App;
