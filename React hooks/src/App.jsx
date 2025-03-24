// import Effect from "./hooks/Effect";
import { ThemeContext } from "./hooks/ThemeProvider";
import { useContext } from "react";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleTheme = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };
  return (
    <>
      {/* <State /> */}
      {/* <Effect /> */}
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "dark" ? "white" : "black",
        }}
      >
        {theme}
      </div>
      <button onClick={handleTheme}>Toggle Theme</button>
    </>
  );
}

export default App;
