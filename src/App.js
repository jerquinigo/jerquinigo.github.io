import React from "react";
import NavBar from "./Components/Navbar.js";
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";
import Skills from "./Components/Skills.js";
import Resume from "./Components/Resume.js";
// import ResumeCopy from "./JonathanEResume.pd";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="backgroundImage">
        <div className="navBarComponent">
          <NavBar />
        </div>
        <div className="landingPageComponent">
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
