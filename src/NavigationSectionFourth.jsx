import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Link } from "react-scroll";

class NavigationSectionFourth extends Component {
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
        {/* Add text to the section when scrolling on it */}
        <Controller>
          <Scene
            triggerElement="#navigation-bar-trigger4"
            duration={"310%"}
            triggerHook={0.54}
            classToggle="section-highlight"
          >
            {(progress, event) => (
              <div
                className="fourth-section navigation-section"
                onMouseOver={this.hoverElement}
                onMouseOut={this.unhoverElement}
              >
                <Link to="fourth-page" spy={true} smooth={true} duration={1500}>
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
                      04 - HISTORY
                    </div>
                  ) : (
                    <div
                      onMouseEnter={this.hoverElement}
                      onMouseLeave={this.unhoverElement}
                      style={{ cursor: "pointer" }}
                      className={this.props.hoverClass}
                    >
                      04
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
            classToggle={[".fourth-section", "section-show"]}
            triggerHook={0.58}
          >
            <div />
          </Scene>
          {/* Section colour change */}
          <Scene
            triggerElement="#navigation-bar-trigger2"
            duration={"230%"}
            classToggle={[".fourth-section", "navigation-green"]}
            triggerHook={0.58}
          >
            <div />
          </Scene>
          <Scene
            triggerElement="#navigation-bar-trigger3"
            duration={"227%"}
            classToggle={[".fourth-section", "navigation-white"]}
            triggerHook={0.59}
          >
            <div />
          </Scene>
        </Controller>
      </div>
    );
  }
}

export default NavigationSectionFourth;
