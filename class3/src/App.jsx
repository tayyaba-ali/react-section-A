import React from "react";
import "./App.css";
import Greet from "./components/Greet";

let student = "Rabia";

function App() {
  return (
    <>
      <Greet name="Rabia" course="web" />
      <Greet name="Laiba" />
      <Greet name="Humna" />

      <h1>hello {student}</h1>
    </>
  );
}

export default App;
