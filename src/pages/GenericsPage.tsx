import { Typography, Box } from '@mui/material';
import CodeBlock from '../components/Code';

const codeExample = `
function identity<T>(arg: T): T {
  return arg;
}

const output1 = identity<string>("hello");
const output2 = identity<number>(42);
`;

const GenericsPage = () => {
  return (
    <Box>
      <Typography variant="h1">Generics in TypeScript</Typography>
      <Typography variant="body1">
        Generics provide a way to create reusable components that work with a variety of types
        rather than a single one. They allow you to capture the type the user provides so you can
        use it later.
      </Typography>
      <CodeBlock code={codeExample} title="Generic Function" />
      <Typography variant="body1">
        In this example, the <code>identity</code> function uses a type variable <code>T</code> that
        allows it to accept and return values of any type, while preserving the type information.
      </Typography>
    </Box>
  );
};

export default GenericsPage;
