import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Link } from "react-scroll";

class NavigationSectionOne extends Component {
  state = { isHovering: false };

  hoverElement = () => {
    this.setState({ isHovering: true });
  };

  unhoverElement = () => {
    this.setState({ isHovering: false });
  };

  render() {
    return (
      <div>
        <Controller>
          <Scene
            triggerElement="#navigation-bar-trigger1"
            duration={"185%"}
            triggerHook={0.1}
            classToggle="section-highlight"
          >
            {(progress, event) => (
              <div
                onMouseOver={this.hoverElement}
                onMouseOut={this.unhoverElement}
                className="first-section navigation-section"
              >
                <Link to="second-page" spy={true} smooth={true} duration={1500}>
                  {this.state.isHovering === true ||
                  event.type === "start" ||
                  event.type === "end" ? (
                    <div
                      onMouseEnter={this.hoverElement}
                      onMouseLeave={this.unhoverElement}
                      style={{ cursor: "pointer" }}
                      className={
                        this.state.isHovering === true &&
                        event.type !== "start" &&
                        event.type !== "end"
                          ? "section-highlight-hover"
                          : ""
                      }
                    >
                      01 - STORY
                    </div>
                  ) : (
                    <div
                      onMouseEnter={this.hoverElement}
                      onMouseLeave={this.unhoverElement}
                      style={{ cursor: "pointer" }}
                      className={this.props.hoverClass}
                    >
                      01
                    </div>
                  )}
                </Link>
              </div>
            )}
          </Scene>
          {/* Start showing the section number in Navbar */}
          <Scene
            triggerElement="#navigation-bar-trigger1"
            duration={"1500%"}
            classToggle={[".first-section", "section-show"]}
            triggerHook={0.1}
          >
            <div />
          </Scene>
          {/* Section colour change */}
          <Scene
            triggerElement="#navigation-bar-trigger2"
            duration={"230%"}
            classToggle={[".first-section", "navigation-green"]}
            triggerHook={0.12}
          >
            <div />
          </Scene>
          <Scene
            triggerElement="#navigation-bar-trigger3"
            duration={"220%"}
            classToggle={[".first-section", "navigation-white"]}
            triggerHook={0.14}
          >
            <div />
          </Scene>
        </Controller>
      </div>
    );
  }
}

export default NavigationSectionOne;
