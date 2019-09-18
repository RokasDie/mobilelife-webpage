import React, { Component } from "react";
import "./ToTopButton.css";
import { Controller, Scene } from "react-scrollmagic";
import { Link } from "react-scroll";

class ToTopButton extends Component {
  state = {};

  scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  };

  render() {
    return (
      <Controller>
        <Scene
          triggerElement={this.props.buttonAppearTrigger}
          duration={15000}
          triggerHook={0.0}
          classToggle={["#mobileTopButton", "show-element-half-opacity"]}
          pin
        >
          <Link to="first-page" spy={true} smooth={true} duration={1500}>
            <button id="mobileTopButton" title="Go to top">
              Top
            </button>
          </Link>
        </Scene>
      </Controller>
    );
  }
}

export default ToTopButton;
