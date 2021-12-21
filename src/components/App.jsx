import React from "react";
import Palette from "./Palette";
import seedColors from "../seedColores";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[4]} />
    </div>
  );
}

export default App;
