import React, { Component } from "react";

import saveAPlate from "../Assets/saveAPlate.png";
import interest1 from "../Assets/interest1.png";
import weatherApp from "../Assets/weatherApp.png";
import "./Projects2.css";
class Projects extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="projectsMainContainer">
        <h1 className="projectTitle">Projects</h1>
        <div className="projectsMainGridContainer">
          <div className="item1">
            <img className="saveAPlateImg" src={saveAPlate} alt="" />
          </div>

          <div className="item2">
            <h2 className="projectNameForDiv">Save A Plate</h2>
            <p className="innerParagraphText">
              <strong>"Save A Plate"</strong> is a webapp that was created to
              reduce food waste and hunger in NYC. There are two types of users:
              Vendors & Clients. Vendors include businesses such as restaurants
              and catering halls. They have the option to add food items for
              donation. On the other hand, clients are non-profit organizations
              that can claim those food items as well as favorite vendors.
            </p>
            <div className="linksPresentation">
              <a target="blank" href="http://save-a-plate.herokuapp.com/">
                <button className="buttonDesign">Live Site</button>
              </a>
              <a href="https://github.com/jerquinigo/SaveAPlate" target="blank">
                <button className="buttonDesign">Github Code</button>
              </a>
            </div>
          </div>

          <div className="item3">
            <h2 className="projectNameForDiv">Interest</h2>
            <p className="innerParagraphText">
              {" "}
              <strong>"Interest"</strong> Interest is a clone of the Pinterest
              Website. I wanted to test my skills and recreate the same
              functionality that The real website offers. It was a challenging
              task, but managed to replicate it. It is a fullstack application
              that uses all my current tech stack skills. It has user
              authentications and redux to manage the states.
            </p>
            <div className="linksPresentation">
              <a
                target="blank"
                href="https://interest-clone-project.herokuapp.com/"
              >
                <button className="buttonDesign">Live Site</button>
              </a>
              <a
                href="https://github.com/jerquinigo/Pinterest_Clone"
                target="blank"
              >
                <button className="buttonDesign">Github Code</button>
              </a>
            </div>
          </div>
          <div className="item4">
            <img className="interestImg" src={interest1} alt="" />
          </div>
          <div className="item5">
            <img className="weatherAppImg" src={weatherApp} alt="" />
          </div>
          <div className="item6">
            <h2 className="projectNameForDiv">Weather App</h2>
            <p className="innerParagraphText">
              WEATHER APP is a frontend application that uses the Darknet api to
              get updates for the weather based longitude and latitude. Based on
              the location, it will display a funny gif showing the current
              temperature based on cartoon images of homer simpson reacting to
              the temperature. This app uses React and is hosted on github
              pages.
            </p>
            <div className="linksPresentation">
              <a
                target="blank"
                href="https://jerquinigo.github.io/Weather-App/"
              >
                <button className="buttonDesign">Live Site</button>
              </a>
              <a
                href="https://github.com/jerquinigo/Weather-App/blob/master/weather_app/src/appInfo.md"
                target="blank"
              >
                <button className="buttonDesign">Github Code</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
