// import Effect from "./hooks/Effect";
// import { ThemeContext } from "./hooks/ThemeProvider";
// import { useContext } from "react";
import Ref from "./hooks/Ref";

function App() {
  // const { theme, setTheme } = useContext(ThemeContext);
  // const handleTheme = () => {
  //   if (theme === "light") setTheme("dark");
  //   if (theme === "dark") setTheme("light");
  // };
  return (
    <>
      <h1>Hello these are my hook tasks</h1>
      {/* <State /> */}
      {/* <Effect /> */}
      {/* <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        {theme}
      </div>
      <button onClick={handleTheme}>Toggle Theme</button> */}
      <Ref />
    </>
  );
}

export default App;
