
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import RegistrationForm from './components/RegistrationForm';
import CreditScoreQuiz from './components/CreditScoreQuiz';
import LoanOptionsPage from './pages/LoanOptionsPage';
import Home from './components/Home';
import LenderSignupForm from './components/LenderSignUp';
import BizSIgnUpForm from './components/BizSIgnUp';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegistration = () => {
    setIsRegistered(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={!isRegistered ? <Home onRegister={handleRegistration} /> : <Navigate to="/quiz" />}
          />
          <Route
            path="/register"
            element={!isRegistered ? <RegistrationForm onRegister={handleRegistration} /> : <Navigate to="/quiz" />}
          />
          <Route
            path="/LenderSignup"
            element={!isRegistered ? <LenderSignupForm /> : <Navigate to="/LenderSignup" />}
          />
          <Route
            path="/BizSIgnUp"
            element={!isRegistered ? <BizSIgnUpForm /> : <Navigate to="/BizSIgnUp" />}
          />
          
          
          <Route
            path="/quiz"
            element={isRegistered ? <CreditScoreQuiz /> : <Navigate to="/" />}
          />
          <Route
            path="/loan-options"
            element={isRegistered ? <LoanOptionsPage /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;


