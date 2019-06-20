import React from "react";
import NavBar from "./Components/Navbar.js";
import About from "./Components/About.js";
import Projects from "./Components/Projects.js";
import Skills from "./Components/Skills.js";
import Resume from "./Components/Resume.js";
// import ResumeCopy from "./JonathanEResume.pd";
import { Route, Switch } from "react-router-dom";
import { baseUrl } from "./index.js";
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
            <Route path={baseUrl + "/"} exact component={About} />
            <Route path={baseUrl + "/projects"} component={Projects} />
            <Route path={baseUrl + "/skills"} component={Skills} />
            <Route path={baseUrl + "/resume"} component={Resume} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
