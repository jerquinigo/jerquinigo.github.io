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
        <h1 className="myName">Jonathan Erquinigo</h1>
        <h2 className="myTitle">Full Stack Web Developer/ Software Engineer</h2>
        <img className="profilePicture" src={Jonathan} alt="" />
        <p className="mediaP">
          Computer technician turned fullstack web developer. I have a love for
          technology and wanted to create and maintain applications. I entered A
          program called Pursuit and I learned How to be a full stack Developer.
          Using React, Javascript, Express, SQL, Postgres and node.js
        </p>
      </div>
    );
  }
}

export default About;
