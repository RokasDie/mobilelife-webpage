import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Link } from "react-scroll";

class NavigationSectionTwo extends Component {
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
            triggerElement="#navigation-bar-trigger2"
            duration={"200%"}
            triggerHook={0.28}
            classToggle="section-highlight"
          >
            {(progress, event) => (
              <div
                className="second-section navigation-section"
                onMouseOver={this.hoverElement}
                onMouseOut={this.unhoverElement}
              >
                <Link to="third-page" spy={true} smooth={true} duration={1500}>
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
                      02 - MINDSET
                    </div>
                  ) : (
                    <div
                      onMouseEnter={this.hoverElement}
                      onMouseLeave={this.unhoverElement}
                      style={{ cursor: "pointer" }}
                      className={this.props.hoverClass}
                    >
                      02
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
            classToggle={[".second-section", "section-show"]}
            triggerHook={0.3}
          >
            <div />
          </Scene>
          {/* Section colour change */}
          <Scene
            triggerElement="#navigation-bar-trigger2"
            duration={"230%"}
            classToggle={[".second-section", "navigation-green"]}
            triggerHook={0.28}
          >
            <div />
          </Scene>
          <Scene
            triggerElement="#navigation-bar-trigger3"
            duration={"220%"}
            classToggle={[".second-section", "navigation-white"]}
            triggerHook={0.28}
          >
            <div />
          </Scene>
        </Controller>
      </div>
    );
  }
}

export default NavigationSectionTwo;
