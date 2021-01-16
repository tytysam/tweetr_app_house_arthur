import './App.css';
import React from 'react'
import Home from './Components/Home'
import { Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Main App</h1>
      <Home />
    </div>
  );
}

export default App;
