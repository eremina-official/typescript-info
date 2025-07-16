import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#fff',
      default: '#f5f5f5',
    },
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    text: {
      primary: '#424242',
      secondary: '#757575',
    },
  },
  typography: {
    h1: {
      fontSize: '2em',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        component: 'div',
      },
    },
  },
});

export default theme;
