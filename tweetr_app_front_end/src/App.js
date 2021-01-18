import "./App.css";
import React from "react";
import Home from "./Components/Home";
import { Route, Link, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
