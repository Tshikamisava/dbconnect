import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = ({ onRegister }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call onRegister to update registration status
    onRegister();
    // Redirect to quiz page
    navigate('/quiz');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 400,
        mx: 'auto',
        my: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: 'white'
      }}
    >
      <Typography variant="h5" gutterBottom>
        Register
      </Typography>
      <TextField label="Name" fullWidth margin="normal" />
      <TextField label="Email" type="email" fullWidth margin="normal" />
      <TextField label="Phone Number" fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Submit
      </Button>
    </Box>
  );
};

export default RegistrationForm;