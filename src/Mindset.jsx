import React, { Component } from "react";
import "./Mindset.css";
import { Controller, Scene } from "react-scrollmagic";
import MobileLifeHeart from "./MobileLifeHeart";

class Mindset extends Component {
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
            scrollDuration={1400}
          />

          <div className="navigation-mindset" />
          <div class="section-separation-mindset" />
          <div style={{ height: "60vh" }}>
            <div
              className="sticky"
              style={{
                top: "45%"
              }}
            >
              <div id="trigger-mindset-text" />

              <h2 className={"the-mindset mindset-group-one"}>The mindset</h2>
              <h2 className={"the-mindset-first-text mindset-group-one"}>
                Something invisible yet very important to the team's performance
                was the mindset of MobileLife.
              </h2>
              <Controller>
                <Scene
                  triggerElement="#trigger-mindset-text"
                  duration={"200%"}
                  classToggle={[".mindset-group-one", "show-element"]}
                  triggerHook={0.95}
                >
                  <div />
                </Scene>
                <Scene
                  triggerElement="#trigger-mindset-text"
                  duration={"200%"}
                  classToggle={[".mindset-group-one", "hide-element"]}
                  triggerHook={0.0}
                >
                  <div />
                </Scene>
              </Controller>
            </div>
          </div>

          <div>
            <div id="trigger-mindset-text2" />
            <h2 className={"the-mindset-text-two "}>
              It was characterized by a start-up culture, high pace and
              flat-hierarchy environment and overarching customer focused
              approach. The ones who worked here had to be thorough, creative,
              stubborn and not tied up at the same time. It was an organization
              that transformed differences into strengths.
            </h2>
            <Controller>
              <Scene
                triggerElement="#trigger-mindset-text2"
                duration={"200%"}
                classToggle={[".the-mindset-text-two", "show-element"]}
                triggerHook={0.95}
              >
                <div />
              </Scene>
              <Scene
                triggerElement="#trigger-mindset-text"
                duration={"200%"}
                classToggle={[".the-mindset-text-two", "hide-element"]}
                triggerHook={0.0}
              >
                <div />
              </Scene>
            </Controller>
          </div>
        </div>
      </div>
    );
  }
}

export default Mindset;
