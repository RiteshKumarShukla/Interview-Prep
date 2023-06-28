import { useEffect, useRef, useState } from "react";
import "./App.css";
import useOnlineStatus from "./hooks/useOnlineStatus";
import useTimeout from "./hooks/useTimeout";

function App() {
  // bring useTimeout hook here
  
  // bring useOnlineStatus hook here
const {ready} = useTimeout(5000);
const isUserOnline = useOnlineStatus();
//const[isUserOnline, setIsUserOnline] = useOnlineStatus()

  return (
    <div className="App">
      <h1>Custom Hooks</h1>

      <h3>Timeout</h3>
      {/* Show this div if the ready variable is true */}
      {ready && <div data-testid="timeout-div">After the timeout</div>}
      

      <br />
      <h3>Online Status</h3>
      {/* If the user's network status is online, show this div only */}
      {isUserOnline ? <div data-testid="online-status">Online 🟢</div> :<div data-testid="offline-status">Offline 🔴</div>}
      
    <h3>learn react</h3>
      {/* If the user's network status is offline, show this div only */}
      
    </div>
  );
}

export default App;