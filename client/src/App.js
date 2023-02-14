import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";
import { useState } from "react";

const App = () => {
  const [output, setOutput] = useState("");

  return (
    <div className="App">
      <Input getOutput={setOutput} />
      <Output miniUrl={output} />
    </div>
  );
};

export default App;
