import React from 'react';
import { Box, Stack, List, ListItem, ListItemText, Typography } from '@mui/material';
import CodeBlock from '../components/Code';

const codeExample = `
function identity<T>(value: T): T {
  return value;
}
`;

const codeExample2 = `function logLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}
`;

const codeExample1 = `interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
`;

const Extends: React.FC = () => (
  <Box>
    <Typography variant="h1">
      TypeScript <code>extends</code> Keyword
    </Typography>

    <Typography variant="h2">Usage</Typography>
    <List dense sx={{ pt: 0, pb: 2 }}>
      <ListItem>1. Extending interfaces</ListItem>
      <ListItem>2. Extending classes</ListItem>
      <ListItem>3. Generic constraints (T extends U)</ListItem>
    </List>

    <Stack spacing={3}>
      <Box>
        <Typography variant="h3">Extending interfaces</Typography>
        <Typography variant="body1" gutterBottom>
          The <code>extends</code> keyword in TypeScript is used to create a new interface or type
          that inherits properties from another. This helps with code reuse and type safety.
        </Typography>

        <CodeBlock code={codeExample1} title="Example" />

        <Typography variant="body1" gutterBottom>
          In the example above, <code>Dog</code> extends <code>Animal</code>, so it inherits the{' '}
          <code>name</code> property and adds its own <code>breed</code> property.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h3">Generic Constraints</Typography>

        <Typography variant="body1" component="div" sx={{ mt: 1 }}>
          <p>In TypeScript generics, the extends keyword means:</p>
          <p>
            👉 <i>The generic type must satisfy (or be assignable to) this constraint.</i>
          </p>
          <p>
            So it’s not inheritance like in classes, but rather a <i>type restriction.</i>
          </p>
        </Typography>

        <CodeBlock code={codeExample} title="Example 1: Without extends" />

        <Typography variant="body1" gutterBottom>
          Here T can be anything: number, string, object, function, etc. TypeScript doesn’t restrict
          it.
        </Typography>

        <CodeBlock code={codeExample2} title="Example 2: With extends" />

        <Typography variant="body1" component="div" gutterBottom>
          <p>
            Now <i>T</i> must be something that has a <code>.length</code> property.
          </p>
          <p>"hello" ✅ works (string has length).</p>
          <p>[1,2,3] ✅ works (array has length).</p>
          <p>42 ❌ error (number doesn’t have length).</p>
          <p>
            So extends narrows down what <i>T</i> is allowed to be.
          </p>
        </Typography>
      </Box>
    </Stack>
  </Box>
);

export default Extends;
