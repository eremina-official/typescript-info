import { useState } from 'react';
import { Link } from 'react-router';
import { Container, Menu, Box, Stack, Paper, MenuList, MenuItem } from '@mui/material';
import RoutePaths from './router/RoutePaths';
import './App.css';

function App({ children }: { children?: React.ReactNode }) {
  const menuItems: { label: string; path: string }[] = [
    { label: 'Home', path: RoutePaths.HOME },
    { label: 'TypeScript data types', path: RoutePaths.DATA_TYPES },
    { label: 'Logout', path: '/logout' },
  ];

  return (
    <div>
      <Box>
        <Stack direction="row" spacing={2}>
          <Paper>
            <MenuList>
              {menuItems.map((item) => (
                <MenuItem key={item.label}>
                  <Link to={item.path}>{item.label}</Link>
                </MenuItem>
              ))}
            </MenuList>
          </Paper>
        </Stack>
      </Box>

      <Box>{children}</Box>
    </div>
  );
}

export default App;
