import React from "react";

const TemperatureInput = ({ temperature, setTemperature }) => {
  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder={"enter temperature to convert"}
        onChange={handleTemperatureChange}
        value={temperature}
      />
    </div>
  );
};

export default TemperatureInput;
