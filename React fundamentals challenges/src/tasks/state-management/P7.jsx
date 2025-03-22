import React from "react";
import { useState } from "react";

const P7 = () => {
  const [count, setCount] = useState(0);

  function handlePlusClick() {
    setCount(count + 1);
  }

  function handleMinusClick() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={handlePlusClick}>+</button>
      <p>{count}</p>
      <button onClick={handleMinusClick}>-</button>
    </div>
  );
};

export default P7;
