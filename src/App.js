import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Counter } from "./components/Counter";
import { AppCard } from "./components/AppCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <hr />
        <AppCard />
      </header>
    </div>
  );
}

export default App;
