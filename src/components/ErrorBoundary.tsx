import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: 'background.default',
            color: 'text.primary',
            p: 3,
            gap: 2,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom color="error">
            Something went wrong
          </Typography>
          <Typography variant="body1" align="center" sx={{ maxWidth: 600 }}>
            An unexpected error has occurred. We apologize for the inconvenience.
          </Typography>
          {this.state.error && (
            <Box
              sx={{
                mt: 2,
                p: 2,
                bgcolor: 'action.hover',
                borderRadius: 1,
                overflow: 'auto',
                maxWidth: '100%',
                maxHeight: '200px',
                fontFamily: 'monospace',
              }}
            >
              <Typography variant="caption" component="pre">
                {this.state.error.toString()}
              </Typography>
            </Box>
          )}
          <Button 
            variant="contained" 
            color="primary" 
            onClick={this.handleReload}
            sx={{ mt: 3 }}
          >
            Reload Page
          </Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
