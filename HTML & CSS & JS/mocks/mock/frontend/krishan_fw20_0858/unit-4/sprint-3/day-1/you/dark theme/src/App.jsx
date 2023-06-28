import "./styles.css";
import { useContext } from "react";
import { AppContext } from "./Context/AppContextProvider";

const style = {
  light: {
    color: "black",
    background: "orange",
    padding: "50px"
  },
  dark: {
    color: "white",
    background: "darkBlue",
    padding: "50px"
  }
};

export default function App() {
  
  const { theme, toggleTheme } = useContext(AppContext);

  

  return (
    <div className="App" style={theme === "dark" ? style.dark : style.light}>
      <h1>Theme is {theme}</h1>
      
      <button
        style={
          theme === "dark"
            ? {
                background: "white",
                color: "black",
                border: "none",
                padding: "5px"
              }
            : {
                background: "lightBlue",
                color: "black",
                border: "none",
                padding: "5px"
              }
        }
        onClick={toggleTheme}
      >
        Toggle THEME
      </button>
    </div>
  );
}
