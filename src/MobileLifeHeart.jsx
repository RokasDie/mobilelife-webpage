import React, { Component } from "react";
import "./Story.css";
import { Controller, Scene } from "react-scrollmagic";
import heartLogo from "./images/ML Heart.svg";
import { Link } from "react-scroll";

class MobileLifeHeart extends Component {
  state = { isHovering: false };

  hoverElement = () => {
    this.setState({ isHovering: true });
  };

  unhoverElement = () => {
    this.setState({ isHovering: false });
  };

  render() {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          // Because for some sections the heart is not hoverable you need to have zIndex
          zIndex: this.props.zIndex
        }}
      >
        <Controller>
          <Scene
            triggerElement={this.props.heartPinTrigger}
            duration={this.props.heartPinDuration}
            triggerHook={0.0}
            pin
          >
            <div className={this.props.heartDivName}>
              <Link
                to="first-page"
                spy={true}
                smooth={true}
                duration={this.props.scrollDuration}
              >
                {/* Change div based on whether hovering or not */}
                {this.state.isHovering === true ? (
                  <div
                    onMouseEnter={this.hoverElement}
                    onMouseLeave={this.unhoverElement}
                    style={{ cursor: "pointer" }}
                    className={this.props.hoverClass}
                  >
                    Go to top
                  </div>
                ) : (
                  <img
                    alt="MobileLife logo"
                    onMouseEnter={this.hoverElement}
                    onMouseLeave={this.unhoverElement}
                    src={heartLogo}
                    className={this.props.heartColorClass}
                  />
                )}
              </Link>
            </div>
          </Scene>
          <Scene
            triggerElement={this.props.heartAppearTrigger}
            duration={"340%"}
            classToggle={this.props.heartAppearClassToggle}
            triggerHook={0.85}
          >
            <div />
          </Scene>
          <Scene
            triggerElement={this.props.heartDisappearTrigger}
            duration={"170%"}
            classToggle={this.props.heartDisappearClassToggle}
            triggerHook={this.props.heartDisappearTriggerHook}
          >
            <div />
          </Scene>
        </Controller>
      </div>
    );
  }
}

export default MobileLifeHeart;
