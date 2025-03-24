import React from "react";
import { useRef, useEffect } from "react";

const Ref = () => {
  const inputRef = useRef();
  const clickCount = useRef(0);
  const countRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    clickCount.current = 0;
    console.log(clickCount.current);
  }, []);

  const handleClick = () => {
    clickCount.current = clickCount.current + 1;

    countRef.current.innerText = clickCount.current;
  };

  return (
    <div>
      <input type="text" name="" id="" ref={inputRef} />
      <h1 ref={countRef}>heading</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Ref;
