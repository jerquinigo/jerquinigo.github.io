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
            <p>
              Save a Plate is a website that was created to reduce food waste
              and hunger in NYC. There are two types of users: Vendors &
              Clients. Vendors include businesses such as restaurants and
              catering halls. They have the option to add food items for
              donation. On the other hand, clients are non-profit organizations
              that can claim those food items as well as favorite vendors.
            </p>
          </div>

          <div className="item3">
            <p>
              {" "}
              INTEREST Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="item4">
            <img className="interestImg" src={interest1} alt="" />
          </div>
          <div className="item5">
            <img className="weatherAppImg" src={weatherApp} alt="" />
          </div>
          <div className="item6">
            <p>
              WEATHER APP Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
