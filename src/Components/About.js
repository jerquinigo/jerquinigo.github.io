import React, { Component } from "react";
import Jonathan from "../Assets/Jonathan_E.jpg";
import "./About.css";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Jonathan Erquinigo</h1>
        <h2>Full Stack Web Developer/ Software Engineer</h2>
        <img className="profilePicture" src={Jonathan} alt="" />
      </div>
    );
  }
}

export default About;
