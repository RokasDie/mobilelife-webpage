import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Link } from "react-scroll";

class NavigationSectionThree extends Component {
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
          {/* Add text to the section when scrolling on it */}
          <Scene
            triggerElement="#navigation-bar-trigger3"
            duration={"215%"}
            triggerHook={0.4}
            classToggle="section-highlight"
          >
            {(progress, event) => (
              <div
                className={"third-section navigation-section"}
                onMouseOver={this.hoverElement}
                onMouseOut={this.unhoverElement}
              >
                <Link to="fifth-page" spy={true} smooth={true} duration={1500}>
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
                      03 - PRODUCTS
                    </div>
                  ) : (
                    <div
                      onMouseEnter={this.hoverElement}
                      onMouseLeave={this.unhoverElement}
                      style={{ cursor: "pointer" }}
                      className={this.props.hoverClass}
                    >
                      03
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
            classToggle={[".third-section", "section-show"]}
            triggerHook={0.45}
          >
            <div />
          </Scene>
          {/* Section colour change */}
          <Scene
            triggerElement="#navigation-bar-trigger2"
            duration={"230%"}
            classToggle={[".third-section", "navigation-green"]}
            triggerHook={0.42}
          >
            <div />
          </Scene>
          <Scene
            triggerElement="#navigation-bar-trigger3"
            duration={"220%"}
            classToggle={[".third-section", "navigation-white"]}
            triggerHook={0.46}
          >
            <div />
          </Scene>
        </Controller>
      </div>
    );
  }
}

export default NavigationSectionThree;
