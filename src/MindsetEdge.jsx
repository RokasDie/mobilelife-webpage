import React, { Component } from "react";
import "./Mindset.css";
import MobileLifeHeart from "./MobileLifeHeart";

class MindsetEdge extends Component {
  state = {
    isIntersecting: false,
    intersectionRatio: "",
    currentY: "",
    isIntersectingSecondText: false,
    intersectionRatioSecondText: "",
    currentYSecondText: ""
  };

  render() {
    return (
      <div className="third-page-background-image">
        <div className="third-page">
          {/* Mobilelife Heart */}
          <MobileLifeHeart
            heartPinTrigger="#navigation-bar-trigger2"
            heartPinDuration="70%"
            heartDivName="ml-heart-div-mindset"
            hoverClass="go-to-start-mindset"
            heartColorClass="ml-heart-green"
            heartAppearTrigger="#navigation-bar-trigger2"
            heartAppearClassToggle={[".ml-heart-div-mindset", "show-element2"]}
            heartDisappearTrigger="#trigger-mindset-text"
            heartDisappearClassToggle={[
              ".ml-heart-div-mindset",
              "hide-element"
            ]}
            heartDisappearTriggerHook={0.35}
          />

          <div className="navigation-third" />
          <div style={{ height: "60vh" }} />
          <div style={{}}>
            <div style={{ top: "45%" }}>
              <div id="trigger-mindset-text" />

              <h2 className={"the-mindset "} style={{ opacity: 1 }}>
                The mindset
              </h2>
              <h2 className={"the-mindset-first-text "} style={{ opacity: 1 }}>
                Something invisible yet very important to the team's performance
                was the mindset of MobileLife.
              </h2>
            </div>
          </div>

          <div>
            <div id="trigger-mindset-text2" />
            <h2 className={"the-mindset-text-two "} style={{ opacity: 1 }}>
              It was characterized by a start-up culture, high pace and
              flat-hierarchy environment and overarching customer focused
              approach. The ones who worked here had to be thorough, creative,
              stubborn and not tied up at the same time. It was an organization
              that transformed differences into strengths.
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default MindsetEdge;
