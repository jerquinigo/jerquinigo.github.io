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
        <h2 className="myTitle">Software Engineer</h2>
        <div className="linkIconsMainContainer">
          <div className="linkIconsMainDiv">
            <a
              target="blank"
              className="anchorLinkIcons"
              href="https://www.linkedin.com/in/jerquinigo/"
            >
              <div>
                <img
                  className="linkIcons1"
                  src="https://icongr.am/devicon/linkedin-original.svg"
                  alt=""
                />
              </div>
            </a>
            <a
              href="https://github.com/jerquinigo"
              className="anchorLinkIcons"
              target="blank"
            >
              <div>
                <img
                  className="linkIcons2"
                  src="https://icongr.am/devicon/github-original-wordmark.svg"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
        <br />

        <img className="profilePicture" src={Jonathan} alt="" />
        <div className="aboutMeContainerText">
          <p className="mediaP">
            Computer Technician to Full Stack Web Developer. My love for
            technology led me to a program called Pursuit. As a fellow I learned
            the skills needed to become a developer. I am now fluent in React,
            JavaScript, Express, SQL, Postgres, and Node.js. With these new
            skills I am ready to help businesses run more efficiently.
          </p>
        </div>
      </div>
    );
  }
}

export default About;

// A Computer Techician who transitioned into becoming a web developer.
// I have a love for technology and wanted to grow my skillsets into
// development. I entered a program called Pursuit and they taught me
// the skills to become a fullstack web developer. I have fluent skills
// in React, JavaScript, Express, SQL, Postgres, and Node.js
