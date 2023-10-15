// import { useState } from "react";

import "./App.css";
import Navbar from "./Navbar";
import SayHello from "./SayHello.jsx";
import SecondPart from "./SecondPart.jsx";

function App() {
  return (
    <>
      <div className="App">
        <div id="landing">
          <Navbar />
          <SayHello />
        </div>
        <SecondPart />
      </div>
    </>
  );
}

export default App;
