import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

const Layout = ({ children }) => (
  <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Small Business Platform
        </Typography>
      </Toolbar>
    </AppBar>
    <Container component="main" sx={{ flex: 1, py: 3 }}>
      {children}
    </Container>
    <Box component="footer" sx={{ py: 2, backgroundColor: '#f4f4f4', textAlign: 'center' }}>
      <Typography variant="body2" color="text.secondary">
        © 2024 Small Business Platform
      </Typography>
    </Box>
  </Box>
);

export default Layout;