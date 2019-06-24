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
              <strong>"Interest"</strong> is a clone of the Pinterest Website. I
              worked copying UI/UX to functionality of the site. It is a
              FullStack Application that has user auth and redux to manage
              states.
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
              get updates for the weather based on your location. Based on the
              temperature, it will display a funny Gif based on the temperature
              at your location
            </p>
            <div className="linksPresentation">
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
