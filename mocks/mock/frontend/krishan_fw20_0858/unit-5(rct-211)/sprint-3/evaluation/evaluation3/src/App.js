import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import UserCard from "./Components/UserCard";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  //import the useDark mode hook here
  const [isDarkMode,toggleDarkMode] = useDarkMode();
  const [value, setValue] = useState("");
  const onChange = (e)=>setValue(e.target.value)
  
  return (
    // add the dark-mode class name along with App depending on the boolean value of isDarkMode
    <div data-testid="app-component" className={`App ${isDarkMode ? 'dark-mode':'light-mode'}`} >
      {/* to toggle the darkMode value of the application */}
      {/* Default value: Dark.  */}
      <button onClick={toggleDarkMode} data-testid="theme-button">{isDarkMode ? 'Light' : 'Dark'}</button>

      {/* use the UserCard component here */}
      <UserCard imageURL={'https://images.unsplash.com/photo-1568602562958-75fa1a44ab44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRyYWdvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'}
      avatarShape={'square'}
      name={'Krishan'}
      backgroundColor={'red'}
      
      title={'Full stack'}/>

      <br />
      {/* use the Input component here */}
    <Input variant="flushed" value={value} onChange={onChange}/>
      <div data-testid="input-value">Input value is {value}</div>
      <div>learn react</div>
    </div>
  );
}

export default App;

/*
imageURL for testing;
1. https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=1400&q=60
2. https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60
*/
