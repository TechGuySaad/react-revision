import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  const [stepSize, setStepSize] = useState(1);

  const handleChange = (e) => {
    setStepSize(Number(e.target.value));
  };
  const increment = () => {
    if (count === 9) alert("You've reached 10!");
    setCount((prevCount) => prevCount + stepSize);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - stepSize);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter step size"
        value={stepSize}
        onChange={handleChange}
      />
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default State;
