import React from "react";
import { useState } from "react";

const P10 = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={value} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default P10;
