import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
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
      primary: '#0f172a', // Slate 900
      secondary: '#475569', // Slate 600
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#0f172a',
      marginBottom: '1rem',
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#0f172a',
      marginBottom: '0.75rem',
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#0f172a',
      marginBottom: '0.75rem',
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#0f172a',
      marginBottom: '0.5rem',
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: '#0f172a',
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#0f172a',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
      color: '#334155', // Slate 700
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        code: {
          backgroundColor: 'oklch(0.92 0.012 260)',
          color: '#0f172a', // Slate 900
          padding: '2px 4px',
          borderRadius: '4px',
          fontSize: '0.9em',
          fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'palette.primary.main',
          backdropFilter: 'blur(20px)',
          color: 'palette.primary.contrastText',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#ffffff',
          borderRight: '1px solid #e2e8f0',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        elevation1: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
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
      },
    },
  },
  zIndex: {
    drawer: 1200, // Ensure drawer is below AppBar if needed, or adjust as per layout
  },
});

export default theme;
