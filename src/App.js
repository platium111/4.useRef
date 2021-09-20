import "./App.css";
import React, { useState } from "react";
import RefComponent from "./RefComponent";

function App() {
  console.log("------");
  console.log("App rendering");
  const [count, setCount] = useState(0);

  const handleChange = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      {/* Whenever input something, it will render */}
      <input onChange={handleChange}></input>
      <p>Count {count}</p>
      <RefComponent />
    </div>
  );
}

export default App;
