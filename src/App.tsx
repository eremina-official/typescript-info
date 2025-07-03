import { useState } from 'react';
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
});

function App({ children }: { children?: React.ReactNode }) {
  const menuItems: { label: string; path: string }[] = [
    { label: 'Home', path: RoutePaths.HOME },
    { label: 'TypeScript data types', path: RoutePaths.DATA_TYPES },
    { label: 'Logout', path: '/logout' },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AppBar sx={{ position: 'static', p: 2 }}>Typescript Features</AppBar>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: '100vh',
          }}
        >
          <Box
            sx={{
              width: 300,
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Stack direction="row" sx={{ padding: 2, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
              <MenuList>
                {menuItems.map((item) => (
                  <MenuItem key={item.label}>
                    <Link to={item.path}>{item.label}</Link>
                  </MenuItem>
                ))}
              </MenuList>
            </Stack>
          </Box>

          <Box sx={{ padding: 2, flexGrow: 1 }}>{children}</Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
