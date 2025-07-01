import { useState } from 'react';
import { Container } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  const debounce = (callback: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => callback(...args), delay);
    };
  };

  console.log(1);
  setTimeout(() => console.log(2), 0);
  setTimeout(() => console.log(3), 1);
  console.log(5);
  Promise.resolve().then(() => console.log(4));

  interface TestObject {
    color_Property: string;
    test_Property: number;
  }

  const test: TestObject = {
    color_Property: 'testcolor',
    test_Property: 0,
  };

  const getObjectKeys = (obj: TestObject): void => {
    const result = Object.keys(obj).join(', ');

    console.log('result', result);
  };
  getObjectKeys(test);

  return (
    <div>
      <h1>Vite + React</h1>

      <Container maxWidth="sm">
        <div>test</div>
      </Container>
    </div>
  );
}

export default App;
