import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { RouterProvider } from 'react-router';
import browserRouter from './router/BrowserRouter.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <RouterProvider router={browserRouter} />
    </ThemeProvider>
  </StrictMode>
);
