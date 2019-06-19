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
            Computer technician turned fullstack web developer. I have a love
            for technology and wanted to create and maintain applications. I
            entered A program called Pursuit and I learned How to be a full
            stack Developer. Using React, Redux, Javascript, Express, SQL,
            Postgres and node.js.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
