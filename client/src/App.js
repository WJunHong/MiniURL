import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";

const App = () => {
  return (
    <div className="App">
      <Input />
      <Output />
    </div>
  );
};

export default App;
