import React, { Component } from "react";
import SideNav, { MenuIcon } from "react-simple-sidenav";
import { Link } from "react-router-dom";
import ResumeCopy from "../JonathanEResume.pdf";
import "./NavBar.css";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false
    };
  }

  render() {
    console.log(this.state.showNav);
    return (
      <div className="navBarMainDiv">
        <MenuIcon
          className="iconItem"
          onClick={() => this.setState({ showNav: true })}
        />
        <div>
          <div>
            <SideNav
              showNav={this.state.showNav}
              onHideNav={() => this.setState({ showNav: false })}
              title="Jonathan Erquinigo"
              titleStyle={{ fontSize: "30px", backgroundColor: "#44abcc" }}
              items={[
                <Link
                  onClick={() => this.setState({ showNav: false })}
                  className="links"
                  to="/"
                >
                  About
                </Link>,
                <Link
                  onClick={() => this.setState({ showNav: false })}
                  className="links"
                  to="/projects"
                >
                  Projects
                </Link>,
                <Link
                  onClick={() => this.setState({ showNav: false })}
                  className="links"
                  to="/skills"
                >
                  Skills
                </Link>,
                <Link
                  onClick={() => this.setState({ showNav: false })}
                  className="links"
                  to="/contact"
                >
                  Contact
                </Link>,
                <a
                  onClick={() => this.setState({ showNav: false })}
                  className="links"
                  href={ResumeCopy}
                  target="_blank"
                >
                  Resume
                </a>
              ]}
              itemStyle={{
                listStyleType: "none",
                fontSize: "25px",
                overflow: "scroll"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
