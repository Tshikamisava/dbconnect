import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import RegistrationForm from './components/RegistrationForm';
import CreditScoreQuiz from './components/CreditScoreQuiz';
import LoanOptionsPage from './pages/LoanOptionsPage';
import Home from './components/Home';
import MarketplaceListing from './components/MarketplaceListing';

function App() {
  // State to track if the user has completed registration
  const [isRegistered, setIsRegistered] = useState(false);

  // Function to handle user registration
  const handleRegistration = () => {
    setIsRegistered(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Home Route: Directs users to registration or quiz based on registration status */}
          <Route
            path="/"
            element={!isRegistered ? <Home onRegister={handleRegistration} /> : <Navigate to="/quiz" />}
          />
          
          {/* Registration Route */}
          <Route
            path="/register"
            element={!isRegistered ? <RegistrationForm onRegister={handleRegistration} /> : <Navigate to="/quiz" />}
          />
          
          {/* Quiz Route: Accessible only after registration */}
          <Route
            path="/quiz"
            element={isRegistered ? <CreditScoreQuiz /> : <Navigate to="/" />}
          />

          {/* Loan Options Route: Accessible only after registration */}
          <Route
            path="/loan-options"
            element={isRegistered ? <LoanOptionsPage /> : <Navigate to="/" />}
          />

          {/* Marketplace Listing Route */}
          <Route
            path="/marketplace"
            element={isRegistered ? <MarketplaceListing /> : <Navigate to="/" />}
          />

          {/* Redirect any unknown routes back to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
