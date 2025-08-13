import { useState } from "react";
import "./App.css";
import Navigator from "./components/Navigator";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Navigator/>
      <Hero/>
    </div>
  );
}

export default App;
