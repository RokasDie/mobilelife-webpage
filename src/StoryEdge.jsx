import React, { Component } from "react";
import "./Story.css";
import MobileLifeHeart from "./MobileLifeHeart";

class StoryEdge extends Component {
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
        />
        <div className="navigation-second" />
        {/* Section text */}
        <div style={{ height: "70vh" }} />
        <div style={{}}>
          <div style={{ top: "45%" }}>
            <h1 className="success-story " style={{ opacity: 1 }}>
              The success story
            </h1>
            <h2 className="success-story-text-one " style={{ opacity: 1 }}>
              MobileLife brought together over 100 dedicated people based in
              Copenhagen and Vilnius to deliver innovative mobile solutions to
              the banking customers in Nordic markets.
            </h2>
          </div>
        </div>
        <div>
          <div id="trigger-success-text2" />
          <h2 className="success-story-text-two" style={{ opacity: 1 }}>
            It was a dynamic, innovative and disruptive incubator inside Danske
            Bank, organized into small teams with full-stack developers in a
            very close contact with business. During three years MobileLife
            created a couple of significant solutions in digital banking – home
            financing and investment tools Sunday.dk and June.dk.
          </h2>
        </div>
      </div>
    );
  }
}

export default StoryEdge;
