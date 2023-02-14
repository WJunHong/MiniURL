import "./App.css";
import Input from "./components/Input";
import Output from "./components/Output";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [output, setOutput] = useState("");
  const [fullUrl, setFullUrl] = useState("");

  return (
    <div className="App">
      <Header>MiniURLs</Header>
      <Input getOutput={setOutput} getFullUrl={setFullUrl} />
      <Output miniUrl={output} fullUrl={fullUrl} />
    </div>
  );
};

export default App;
