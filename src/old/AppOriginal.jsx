import logo from '../logo.svg';
import '../App.css';
import Another from './Another';
import Counter from './Counter';
import { useState } from 'react';

function AppOriginal() {
  const [count, setCount] = useState(0);

  // This function increments the count state by 1 whenever it's called
  function handleCount() {
    setCount(count + 1); // Takes current count value and adds 1
  }

  const blueMaths = {
    background: 'blue',
    color: 'white',
    fontSize: '20px',
    padding: '10px',
    fontWeight: 'bold',
  };

  return (
    <div className="App">
      <header className="App-header">
        <Another name="Matt" />
        <Counter count={count} onCount={handleCount} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Yeah baby. First React App Installed!</p>
        <p style={blueMaths}>{3 + 2}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default AppOriginal;
