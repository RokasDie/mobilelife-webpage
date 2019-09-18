import React, { Component } from "react";
import { Controller, Scene } from "react-scrollmagic";
import "./NavigationBar.css";
import { Tween } from "react-gsap";

class NavigationBar extends Component {
  state = {
    webpageHeight: "",
    barPosition: ""
  };

  componentDidMount() {
    console.log(document.body);
    this.setState({
      webpageHeight: document.body.scrollHeight
    });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      barPosition:
        ((window.pageYOffset - window.innerHeight) /
          (document.body.scrollHeight - window.innerHeight)) *
        100
    });
  };

  render() {
    return (
      <Controller>
        <Scene
          triggerElement="#navigation-bar-trigger1 "
          duration={200}
          triggerHook={0.1}
        >
          {progress => (
            <Tween
              to={{
                opacity: 1
              }}
              totalProgress={progress}
              paused
            >
              <div
                className="navigation-bar"
                style={{ top: `${this.state.barPosition}vh` }}
              />
            </Tween>
          )}
        </Scene>
        <Scene
          triggerElement="#navigation-bar-trigger2"
          duration={"210%"}
          classToggle={[".navigation-bar", "navigation-bar-green"]}
          triggerHook={0.23}
        >
          <div />
        </Scene>
        <Scene
          triggerElement="#navigation-bar-trigger3"
          duration={"213%"}
          classToggle={[".navigation-bar", "navigation-bar-purple"]}
          triggerHook={0.5}
        >
          <div />
        </Scene>
      </Controller>
    );
  }
}

export default NavigationBar;
