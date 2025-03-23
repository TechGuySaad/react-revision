import React from "react";

const P9 = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div>
      <button onClick={handleClick}>Click this</button>
    </div>
  );
};

export default P9;
