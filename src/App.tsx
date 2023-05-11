// Create a parent component that wraps child components with a Provider

import { useState, React } from "react";
import { MyContext } from "./components/MyContext";
import MyComponent from "./components/MyComponent";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}

export default App;