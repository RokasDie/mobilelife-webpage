import React, { Component } from "react";
import "./Story.css";
import { Controller, Scene } from "react-scrollmagic";
import MobileLifeHeart from "./MobileLifeHeart";

class Story extends Component {
  state = { isHovering: false, firstTimeHover: false };

  hoverElement = () => {
    this.setState({ isHovering: true });
  };

  unhoverElement = () => {
    this.setState({ isHovering: false, firstTimeHover: true });
  };

  render() {
    return (
      <div className="second-page">
        {/* Mobilelife Heart */}
        <MobileLifeHeart
          heartPinTrigger="#navigation-bar-trigger1"
          heartPinDuration="70%"
          heartDivName="ml-heart-div-story"
          hoverClass="go-to-start-story"
          heartColorClass="ml-heart"
          heartAppearTrigger="#navigation-bar-trigger1"
          heartAppearClassToggle={[".ml-heart-div-story", "show-element2"]}
          heartDisappearTrigger="#trigger-success-text"
          heartDisappearClassToggle={[".ml-heart-div-story", "hide-element"]}
          heartDisappearTriggerHook={0.4}
          scrollDuration={1000}
        />
        <div className="navigation-story" />
        {/* Section text */}
        <div class="section-separation-story" />
        <div style={{ height: "60vh" }}>
          <div
            className="sticky"
            style={{
              top: "45%"
            }}
          >
            <div id="trigger-success-text" />

            <h1 className="success-story success-story-one">
              The success story
            </h1>
            <h2 className="success-story-text-one success-story-one">
              MobileLife brought together over 100 dedicated people based in
              Copenhagen and Vilnius to deliver innovative mobile solutions to
              the banking customers in Nordic markets.
            </h2>
            <Controller>
              <Scene
                triggerElement="#trigger-success-text"
                duration={"200%"}
                classToggle={[".success-story-one", "show-element"]}
                triggerHook={0.95}
              >
                <div />
              </Scene>
              <Scene
                triggerElement="#trigger-success-text"
                duration={"200%"}
                classToggle={[".success-story-one", "hide-element"]}
                triggerHook={0.0}
              >
                <div />
              </Scene>
            </Controller>
          </div>
        </div>

        <div>
          <div id="trigger-success-text2" />
          <h2 className="success-story-text-two">
            It was a dynamic, innovative and disruptive incubator inside Danske
            Bank, organized into small teams with full-stack developers in a
            very close contact with business. During three years MobileLife
            created a couple of significant solutions in digital banking – home
            financing and investment tools Sunday.dk and June.dk.
          </h2>
          <Controller>
            <Scene
              triggerElement="#trigger-success-text2"
              duration={"200%"}
              classToggle={[".success-story-text-two", "show-element"]}
              triggerHook={0.95}
            >
              <div />
            </Scene>
            <Scene
              triggerElement="#trigger-success-text"
              duration={"200%"}
              classToggle={[".success-story-text-two", "hide-element"]}
              triggerHook={0.0}
            >
              <div />
            </Scene>
          </Controller>
        </div>
      </div>
    );
  }
}

export default Story;
