import { Typography, Paper, Box } from '@mui/material';

const codeExample = `
type Point = Record<'x' | 'y', number>;

const point: Point = { x: 10, y: 20 };

// Using Record for dynamic keys
type Scores = Record<string, number>;

const scores: Scores = {
  Alice: 95,
  Bob: 87,
};
`;

const RecordPage = () => {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        TypeScript <code>Record</code> Utility Type
      </Typography>
      <Typography variant="body1">
        The <code>Record&lt;Keys, Type&gt;</code> utility type constructs an object type whose property keys are <code>Keys</code> and whose property values are <code>Type</code>.
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
        <code>Record</code> is useful for creating types for objects with known or dynamic keys, ensuring all properties have the same value type.
      </Typography>
    </Box>
  );
};

export default RecordPage;
