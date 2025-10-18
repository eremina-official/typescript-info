import { Typography, Box } from '@mui/material';
import CodeBlock from '../components/Code';

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
      <Typography variant="h1">
        TypeScript <code>Record</code> Utility Type
      </Typography>
      <Typography variant="body1">
        The <code>Record&lt;Keys, Type&gt;</code> utility type constructs an object type whose
        property keys are <code>Keys</code> and whose property values are <code>Type</code>.
      </Typography>

      <CodeBlock code={codeExample} title="Example" />

      <Typography variant="body1">
        <code>Record</code> is useful for creating types for objects with known or dynamic keys,
        ensuring all properties have the same value type.
      </Typography>
    </Box>
  );
};

export default RecordPage;
