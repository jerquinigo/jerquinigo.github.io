import React, { Component } from "react";
import SideNav, { MenuIcon } from "react-simple-sidenav";
import { Link } from "react-router-dom";
import "./NavBar.css";
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false
    };
  }

  render() {
    return (
      <div className="navBarMainDiv">
        <MenuIcon
          className="iconItem"
          onClick={() => this.setState({ showNav: true })}
        />
        <div className="NavContainer">
          <div>
            <SideNav
              showNav={this.state.showNav}
              onHideNav={() => this.setState({ showNav: false })}
              title="Jonathan Erquinigo"
              titleStyle={{ fontSize: "30px", backgroundColor: "#44abcc" }}
              items={[
                <Link className="links" to="/about">
                  About
                </Link>,
                <Link className="links" to="/projects">
                  Projects
                </Link>,
                <Link className="links" to="/skills">
                  Skills
                </Link>,
                <Link className="links" to="/contact">
                  Contact
                </Link>,
                <Link className="links" to="/resume">
                  My Resume
                </Link>
              ]}
              itemStyle={{
                listStyleType: "none",
                fontSize: "25px"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
