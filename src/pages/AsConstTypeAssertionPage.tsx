import React from 'react';
import { Typography, Paper, Box, List, ListItem } from '@mui/material';

const codeExample = `
// Type 'John'
const name = 'John' as const;

// Type 'readonly [10, 20]'
const array = [10, 20] as const;

// Type 'readonly { text: 'example' }'
const obj = { text: 'example' } as const;
`;

const AsConstPage = () => {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        TypeScript <code>as const</code> Type Assertion
      </Typography>
      <Typography variant="body1">
        The <code>as const</code> assertion in TypeScript tells the compiler to infer the most
        specific, readonly type for a value. This is especially useful for literals and arrays,
        making their types immutable and as narrow as possible.
      </Typography>

      <Typography variant="body1" gutterBottom sx={{ mt: 3 }}>
        That means:
        <List>
          <ListItem>
            No literal types in that expression should be widened (e.g. no going from "example" to
            string)
          </ListItem>
          <ListItem>Object literals get readonly properties</ListItem>
          <ListItem>Array literals become readonly tuples</ListItem>
        </List>
      </Typography>

      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.2em', mt: 3 }}>
        Example
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          background: '#f7f7f7',
          fontFamily: 'monospace',
          fontSize: '1em',
          mb: 2,
          overflowX: 'auto',
        }}
      >
        <pre style={{ margin: 0 }}>{codeExample.trim()}</pre>
      </Paper>
      <Typography variant="body1">
        Using <code>as const</code> is helpful when you want to create literal types from arrays or
        objects, ensuring their values and types remain constant and precise.
      </Typography>
    </Box>
  );
};

export default AsConstPage;
