// Create a parent component that wraps child components with a Provider

import { useState } from "react";
import { MyContext } from "./MyContext";
import MyComponent from "../components/MyComponent";

function Proveedor() {
  const [text, setText] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}

export default Proveedor;