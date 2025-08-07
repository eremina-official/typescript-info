import React from 'react';
import { NavLink } from 'react-router';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Drawer, Stack, Box, MenuList, MenuItem } from '@mui/material';
import RoutePaths from './router/RoutePaths';
import './App.css';
import theme from './theme';

function App({ children }: { children?: React.ReactNode }): React.JSX.Element {
  const menuItems: { label: string; path: string }[] = [
    { label: 'Overview', path: RoutePaths.HOME },
    { label: 'Data types', path: RoutePaths.DATA_TYPES },
    { label: 'Generics', path: RoutePaths.GENERICS },
    { label: 'Record', path: RoutePaths.RECORD },
    { label: 'as const', path: RoutePaths.AS_CONST },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <AppBar sx={{ position: 'static', p: 2, fontWeight: 'bold', fontSize: '1.5rem' }}>
          TypeScript Features
        </AppBar>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row' },
            minHeight: 'calc(100vh - 70px)',
          }}
        >
          <Box
            sx={{
              flex: '0 0 250px',
            }}
          >
            <Stack direction="row" sx={{ py: 2, width: '100%' }}>
              <MenuList
                sx={{
                  p: 1,
                  width: '100%',
                  '& .MuiMenuItem-root': {
                    mb: 1,
                    borderRadius: 1,
                    '&:hover, &.Mui-selected, &.Mui-selected:hover': {
                      bgcolor: 'primary.light',
                      color: 'primary.contrastText',
                    },
                    '&:where(:hover, .Mui-selected) a': {
                      color: 'primary.contrastText',
                    },
                  },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    sx={{
                      width: '100%',
                      p: 0,
                      '& a': {
                        display: 'block',
                        width: '100%',
                        padding: '8px 16px',
                        textDecoration: 'none',
                        color: 'primary.main',
                        fontWeight: 'bold',
                      },
                    }}
                    key={item.label}
                    selected={
                      window.location.pathname === `${import.meta.env.BASE_URL}${item.path}`
                    }
                  >
                    <NavLink to={item.path}>{item.label}</NavLink>
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
