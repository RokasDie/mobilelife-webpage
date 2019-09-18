import React, { Component } from "react";
import "./NavigationProgress.css";
import NavigationSectionOne from "./NavigationSectionOne";
import NavigationSectionTwo from "./NavigationSectionTwo";
import NavigationSectionThree from "./NavigationSectionThree";
import NavigationSectionFourth from "./NavigationSectionFourth";
import NavigationSectionFifth from "./NavigationSectionFifth";

class NavigationProgress extends Component {
  state = {};

  hoverElement = () => {
    console.log("hovering");
  };

  render() {
    return (
      <div>
        <NavigationSectionOne />
        <NavigationSectionTwo />
        <NavigationSectionThree />
        <NavigationSectionFourth />
        <NavigationSectionFifth />
      </div>
    );
  }
}

export default NavigationProgress;
