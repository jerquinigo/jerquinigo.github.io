import React, { Component } from "react";
import "./Skills.css";

class Skills extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="mySkillsParagraph">
          <p className="skillsInnerParagraph">
            I have A Background in Technology. I worked As An It Specialist and
            have four working years experience in the IT field. I also have A
            Cisco Certified Network Technician certificate. I made the change to
            be A software engineer and love the field. I love to create and
            maintain applications.
          </p>
        </div>
        <p className="techStackTitle">My Tech Stack</p>
        <div className="mainImagesContainer">
          <div className="innerMainContainer">
            <div className="row1Container">
              <div className="row1">
                <img
                  className="images"
                  src="https://icongr.am/devicon/react-original.svg"
                  alt=""
                />
                <p className="skillSetText">React</p>
                <img
                  className="images"
                  src="https://cdn.freebiesupply.com/logos/large/2x/redux-logo-png-transparent.png"
                  alt=""
                />
                <p className="skillSetText">Redux</p>
                <img
                  className="images"
                  src="https://icongr.am/devicon/javascript-original.svg"
                  alt=""
                />
                <p className="skillSetText">JavaScript</p>
              </div>
            </div>

            <div className="row2">
              <img
                className="images"
                src="https://icongr.am/devicon/postgresql-original.svg"
                alt=""
              />
              <p className="skillSetText">PostGresql</p>
              <img
                className="images"
                src="https://icongr.am/devicon/html5-original.svg"
                alt=""
              />
              <p className="skillSetText">HTML5</p>
              <img
                className="images"
                src="https://icongr.am/devicon/git-original.svg"
                alt=""
              />
              <p className="skillSetText">Git</p>
            </div>

            <div className="row3">
              <img
                className="images"
                src="https://icongr.am/devicon/css3-original.svg"
                alt=""
              />
              <p className="skillSetText">CSS3</p>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
