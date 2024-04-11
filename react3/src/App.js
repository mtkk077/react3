import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const getColor = () => {
    if (count === 0) {
      return 'black';
    } else {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      return randomColor;
    }
  };

  return (
    <div className='main_block'>
      <p className='getClick' style={{ color: getColor() }}>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count - 1)}>Delete</button>
    </div>
  );
};

export default App;
