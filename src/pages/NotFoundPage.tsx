import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router';
import RoutePaths from '../router/RoutePaths';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" color="primary">
        404
      </Typography>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1" paragraph>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" component={Link} to={RoutePaths.HOME}>
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
