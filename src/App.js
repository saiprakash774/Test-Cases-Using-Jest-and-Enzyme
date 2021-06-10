import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(0);
  return (
    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">
        The Counter is Curently&nbsp;
      <span data-test="count">{count}</span></h1>
      {/*
      -using ternary on the error state to determine whether or not to hide
      -the 'error' and 'hidden' classes are defined in app.css 
    */}
      <div data-test='error-message' className={`error ${error ? '' : 'hidden'}`}>
        The Counter connot go below 0
    </div>
      <button data-test="increment-button" onClick={() =>{if(error) {setError(false);}  setCount(count + 1) }}
      >Increment Counter</button>
      <button data-test="decrement-button" onClick={() => { if (count > 0) { (setCount(count - 1)) } else { setError(true) } }}>
        Decrement Counter
    </button>
    </div>
  );
}

export default App;
