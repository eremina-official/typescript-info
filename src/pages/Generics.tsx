import { Typography, Paper, Box } from '@mui/material';

const codeExample = `
function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("hello");
const output2 = identity<number>(42);
`;

function Generics() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Generics in TypeScript
      </Typography>
      <Typography variant="body1">
        Generics provide a way to create reusable components that work with a variety of types rather than a single one. They allow you to capture the type the user provides so you can use it later.
      </Typography>
      <Typography variant="h2" gutterBottom sx={{ fontSize: '1.2em', mt: 3 }}>
        Example: Generic Function
      </Typography>
      <Paper variant="outlined" sx={{ p: 2, background: '#f7f7f7', fontFamily: 'monospace', fontSize: '1em', mb: 2 }}>
        <pre style={{ margin: 0 }}>{codeExample}</pre>
      </Paper>
      <Typography variant="body1">
        In this example, the <code>identity</code> function uses a type variable <code>T</code> that allows it to accept and return values of any type, while preserving the type information.
      </Typography>
    </Box>
  );
}

export default Generics;