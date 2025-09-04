//the html should be inside the return statement as below
import React from "react";
import Example from "./Example";
import Xyz from "./hello";
import OutlineTypesExample from "./bootstraptest";
import Example2 from "./example2.js";
import Greeting from "./greetings.js";

function App() {
  return (
    <div>
      <h1>Zahid</h1>
      <p>
        <h2>Full Stack</h2>
      </p>
      <img
        src="https://images.unsplash.com/photo-1611766424498-57b8418ed48d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={700}
        height={500}
      />
      <Example />
      <Xyz />
      <OutlineTypesExample />
      <Example2 />
      <Greeting />
    </div>
  );
}

export default App;
