import React, { Component } from "react";
import "./Skills.css";

class Skills extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>
          I have A Background in Technology. I worked As An It Specialist and
          have four working years experience in the IT field. I also have A
          Cisco Certified Network Technician certificate. I made the Change to
          be A software engineer and love the field. I love to create and
          maintain applications.
        </p>
        <p>My Tech Stack</p>
        <img
          className="images"
          src="https://icongr.am/devicon/react-original.svg"
          alt=""
        />
        <p>React</p>
        <img
          className="images"
          src="https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png"
          alt=""
        />
        <p>Redux</p>
        <img
          className="images"
          src="https://icongr.am/devicon/javascript-original.svg"
          alt=""
        />
        <p>JavaScript</p>
        <img
          className="images"
          src="https://icongr.am/devicon/postgresql-original.svg"
          alt=""
        />
        <p>PostGresql</p>
        <img
          className="images"
          src="https://icongr.am/devicon/html5-original.svg"
          alt=""
        />
        <p>HTML5</p>
        <img
          className="images"
          src="https://icongr.am/devicon/git-original.svg"
          alt=""
        />
        <p>Git</p>
        <img
          className="images"
          src="https://icongr.am/devicon/css3-original.svg"
          alt=""
        />
        <p>CSS3</p>
        <img
          className="images"
          src="https://icongr.am/devicon/nodejs-original-wordmark.svg"
          alt=""
        />
        <br />
        <img
          className="images"
          src="https://icongr.am/devicon/express-original-wordmark.svg"
          alt=""
        />
      </div>
    );
  }
}

export default Skills;
