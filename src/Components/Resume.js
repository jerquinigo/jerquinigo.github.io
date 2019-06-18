import React, { Component } from "react";
import ResumeCopy from "../JonathanEResume.pdf";

class Resume extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        hello resume
        <a className="resume link" href={ResumeCopy} target="_blank">
          Resume
        </a>
      </div>
    );
  }
}

export default Resume;
