import { React } from 'react';
import { useState } from 'react';

function Counter({ count, onCount }) {
  const [localCount, setLocalCount] = useState(0);

  function decrement() {
    setLocalCount(prevCount => prevCount - 1);
  }

  function increment() {
    setLocalCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <h2>Props Count: {count}</h2>
      <h2>Local Count: {localCount}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={onCount}>Increment Props</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
