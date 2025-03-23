import "./App.css";
import { useState } from "react";
// import P1 from "./tasks/JSX/P1";
// import P2 from "./tasks/JSX/P2";
// import P3 from "./tasks/components/P3";
// import P5 from "./tasks/props/P5";
// import P6 from "./tasks/props/P6";
// import P7 from "./tasks/state-management/P7";
import TemperatureInput from "./tasks/state-management/TemperatureInput";
import P9 from "./tasks/event-handling/P9";
import P10 from "./tasks/event-handling/P10";
import P11 from "./tasks/conditional-rendering/P11";
import P12 from "./tasks/conditional-rendering/P12";
import P13 from "./tasks/lists-keys/P13";
import P14 from "./tasks/lists-keys/P14";
import P16 from "./tasks/forms/P16";

function App() {
  // const [todos, setTodos] = useState([
  //   { id: 1, text: "Learn React" },
  //   { id: 2, text: "Build a project" },
  // ]);
  // const [temperature, setTemperature] = useState(0);
  // const [tempUnit, setTempUnit] = useState("Celsius");

  // const handleClickConvert = () => {
  //   if (tempUnit === "Celsius") {
  //     setTempUnit("Fahrenheit");
  //     setTemperature((prevTemp) => prevTemp * (9 / 5) + 32);
  //   } else {
  //     setTempUnit("Celsius");
  //     setTemperature((prevTemp) => (prevTemp - 32) * (5 / 9));
  //   }
  // };

  // const todos = [
  //   { id: 1, text: "Learn React" },
  //   { id: 2, text: "Build a project" },
  // ];
  return (
    <>
      <div>
        <h1>Hello world! These are my tasks</h1>
        {/* <P1 />
        <P2 /> */}
        {/* <P3 name={"Alice"} />
        <P3 name={"John"} /> */}
        {/* <P5 message={"Hello world"} />
        <P5 message={"Welcome to React!"} /> */}
        {/* <P6 theme={"dark"} /> */}
        {/* <P7 /> */}

        {/* <div>
          <TemperatureInput
            temperature={temperature}
            setTemperature={setTemperature}
          />
          <p>{tempUnit}</p>
          <button onClick={handleClickConvert}>Convert</button>
        </div> */}

        {/* <P9 /> */}
        {/* <P10 /> */}
        {/* <P11 isLoggedIn={false} /> */}
        {/* <P12 message={"You have a new message"} /> */}
        {/* <P13 todos={todos} /> */}

        {/* <P14 todos={todos} setTodos={setTodos} /> */}
        {/* <P16 /> */}
      </div>
    </>
  );
}

export default App;
