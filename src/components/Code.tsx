import React from 'react';
import { Paper } from '@mui/material';

const CodeBlock: React.FC<{ code: string }> = ({ code }) => (
  <Paper
    variant="outlined"
    sx={{
      p: 2,
      my: 2,
      background: '#f7f7f7',
      fontFamily: 'monospace',
      fontSize: '1em',
      mb: 2,
      overflowX: 'auto',
    }}
  >
    <pre style={{ margin: 0 }}>{code.trim()}</pre>
  </Paper>
);

export default CodeBlock;
