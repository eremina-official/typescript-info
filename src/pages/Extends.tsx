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
    <Typography variant="h1" gutterBottom>
      TypeScript <code>extends</code> Keyword
    </Typography>

    <Typography variant="h2">Usage</Typography>
    <List>
      <ListItem>
        <ListItemText primary="1. Extending interfaces" />
      </ListItem>
      <ListItem>
        <ListItemText primary="2. Extending classes" />
      </ListItem>
      <ListItem>
        <ListItemText primary="3. Generic constraints (T extends U)" />
      </ListItem>
    </List>

    <Stack spacing={3}>
      <Box>
        <Typography variant="h3">Extending interfaces</Typography>
        <Typography variant="body1" gutterBottom>
          The <code>extends</code> keyword in TypeScript is used to create a new interface or type
          that inherits properties from another. This helps with code reuse and type safety.
        </Typography>

        <Typography variant="body1" sx={{ mt: 3 }}>
          <b>Example</b>
        </Typography>

        <CodeBlock code={codeExample1} />

        <Typography variant="body1" gutterBottom>
          In the example above, <code>Dog</code> extends <code>Animal</code>, so it inherits the{' '}
          <code>name</code> property and adds its own <code>breed</code> property.
        </Typography>
      </Box>

      <Box>
        <Typography variant="h3">Generic Constraints</Typography>

        <Typography variant="body1" sx={{ mt: 1 }}>
          <p>In TypeScript generics, the extends keyword means:</p>
          <p>
            👉 <i>The generic type must satisfy (or be assignable to) this constraint.</i>
          </p>
          <p>
            So it’s not inheritance like in classes, but rather a <i>type restriction.</i>
          </p>
        </Typography>

        <Typography variant="body1" sx={{ mt: 3 }}>
          <b>Example 1: Without extends</b>
        </Typography>
        <CodeBlock code={codeExample} />

        <Typography variant="body1" gutterBottom>
          Here T can be anything: number, string, object, function, etc. TypeScript doesn’t restrict
          it.
        </Typography>

        <Typography variant="body1" sx={{ mt: 3 }}>
          <b>Example 2: With extends</b>
        </Typography>
        <CodeBlock code={codeExample2} />

        <Typography variant="body1" gutterBottom>
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
