
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#d32f2f' },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Disable uppercase for button text
          borderRadius: '8px', // Rounded corners
        },
      },
    },
  },
});

export default theme;
