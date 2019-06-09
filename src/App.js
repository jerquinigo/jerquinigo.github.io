import React from "react";
import NavBar from "./Components/Navbar.js";
import About from "./Components/About.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      hello world
      <div className="navBarComponent">
        <NavBar />
      </div>
      <div className="landingPageComponent">
        <About />
      </div>
    </div>
  );
}

export default App;
