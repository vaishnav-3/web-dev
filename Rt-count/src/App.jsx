import React, { useState } from 'react';
//import './Counter.css'; // Assume you have a Counter.css file for styling

function Counter() {
  // Step 1: Define state using the useState hook
  const [count, setCount] = useState(0);

  // Step 2: Create functions to handle state changes
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  // Step 3: The component renders based on the state
  return (
    <div className="counter">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;