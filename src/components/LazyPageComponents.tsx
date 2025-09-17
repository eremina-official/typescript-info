import { Suspense } from 'react';
import { CircularProgress, Box } from '@mui/material';

// Loading component for Suspense fallback
export const PageLoader = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
    <CircularProgress />
  </Box>
);

// Wrapper component for lazy-loaded pages
export const LazyPageWrapper = ({ Component }: { Component: React.ComponentType }) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);
