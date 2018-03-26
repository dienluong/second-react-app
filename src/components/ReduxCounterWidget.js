import React from 'react';

let ReduxCounterWidget = ({counter, handleIncrementButton}) => {
  return (
    <div>
      <h3>Redux Counter</h3>
      <p>{counter}</p>
      <button onClick={handleIncrementButton}>Increment</button>
    </div>
  );
};

export default ReduxCounterWidget;
