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
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '1em',
    },
    h2: {
      fontSize: '1.5em',
      fontWeight: 700,
      marginBottom: '0.5em',
    },
    h3: {
      fontSize: '1.17em',
      fontWeight: 700,
      marginBottom: '0.5em',
    },
    subtitle2: {
      fontSize: '1em',
      fontWeight: 700,
      marginBottom: '0.5em',
    },
    body1: {
      fontSize: '1em',
      lineHeight: 1.6,
    },
    fontSize: 16,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h6',
          subtitle2: 'h6',
        },
        // component: 'div',
      },
    },
  },
  zIndex: {
    drawer: 1,
  },
});

export default theme;
