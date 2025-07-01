import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
    color_Property: string,
    test_Property: number
  }

  const test: TestObject = {
    color_Property: 'testcolor',
    test_Property: 0
  }

  const getObjectKeys = (obj: TestObject): void => {
    const result = Object.keys(obj).join(', ')

    console.log('result', result);
  };
  getObjectKeys(test);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={debounce(() => setCount((count) => count + 1), 2000)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
