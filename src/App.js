import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickMinus = () => {
    if (count > 0) setCount(count - 1);
  };

  useEffect= (() => { console.log('useEffectExample') }, [count]);

  return (
    <div className="App">
     <h1>Hello World</h1>
      <p>Number is { count }</p>
      <button onClick={ handleClick }>+</button>
      <button onClick={ handleClickMinus }>-</button>
      <button onClick={ () => setCount(0) }>Reset</button>
    </div>
  );
}

export default App;
