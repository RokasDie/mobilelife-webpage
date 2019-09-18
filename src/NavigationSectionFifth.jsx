import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Link } from "react-scroll";

class NavigationSectionFifth extends Component {
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
            triggerElement="#navigation-bar-trigger5"
            duration={"280%"}
            triggerHook={0.5}
            classToggle="section-highlight"
          >
            {(progress, event) => (
              <div
                className="fifth-section navigation-section"
                onMouseOver={this.hoverElement}
                onMouseOut={this.unhoverElement}
              >
                <Link to="media-page" spy={true} smooth={true} duration={1500}>
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
                      05 - MEDIA
                    </div>
                  ) : (
                    <div
                      onMouseEnter={this.hoverElement}
                      onMouseLeave={this.unhoverElement}
                      style={{ cursor: "pointer" }}
                      className={this.props.hoverClass}
                    >
                      05
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
            classToggle={[".fifth-section", "section-show"]}
            triggerHook={0.75}
          >
            <div />
          </Scene>
          {/* Section colour change */}
          <Scene
            triggerElement="#navigation-bar-trigger2"
            duration={"230%"}
            classToggle={[".fifth-section", "navigation-green"]}
            triggerHook={0.75}
          >
            <div />
          </Scene>
          <Scene
            triggerElement="#navigation-bar-trigger3"
            duration={"227%"}
            classToggle={[".fifth-section", "navigation-white"]}
            triggerHook={0.75}
          >
            <div />
          </Scene>
        </Controller>
      </div>
    );
  }
}

export default NavigationSectionFifth;
