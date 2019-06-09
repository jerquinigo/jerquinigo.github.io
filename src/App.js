import React from "react";
import NavBar from "./Components/Navbar.js";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        hello world
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
