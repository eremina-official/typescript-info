import { Link } from 'react-router';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Drawer, Menu, Stack, Box, Paper, MenuList, MenuItem } from '@mui/material';
import RoutePaths from './router/RoutePaths';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
  },
  typography: {
    h1: {
      fontSize: '2em',
    },
  },
});

function App({ children }: { children?: React.ReactNode }) {
  const menuItems: { label: string; path: string }[] = [
    { label: 'Home', path: RoutePaths.HOME },
    { label: 'Data types', path: RoutePaths.DATA_TYPES },
    { label: 'Generics', path: RoutePaths.GENERICS },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <AppBar sx={{ position: 'static', p: 2 }}>Typescript Features</AppBar>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: 'calc(100vh - 50px)',
          }}
        >
          <Box
            sx={{
              width: 300,
              flex: '0 0 300px',
              display: { xs: 'none', md: 'block' },
              backgroundColor: '#f5f5f5',
            }}
          >
            <Stack direction="row" sx={{ padding: 2 }}>
              <MenuList>
                {menuItems.map((item) => (
                  <MenuItem key={item.label}>
                    <Link to={item.path}>{item.label}</Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Stack>
          </Box>

          <Box sx={{ padding: '24px', flexGrow: 1 }}>{children}</Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
