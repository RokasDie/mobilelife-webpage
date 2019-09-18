import React, { Component } from "react";
import "./Media.css";
import mediaPictureTwo from "./images/IMG_6078.jpg";
import MediaCard from "./MediaCard";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import MobileLifeHeart from "./MobileLifeHeart";

class Media extends Component {
  state = {};
  render() {
    // If mobile render this part
    if (document.body.clientWidth < 1200) {
      return (
        <div>
          <div style={{ height: "20vh" }} />
          <div>
            <div
              className=" history-style-wide"
              style={{ position: "relative" }}
            >
              <h1 className="media-style">Media</h1>
            </div>
            <MediaCard
              title={"A Bank That Wants To Disrupt Itself"}
              description={
                "A team of around 120 people are housed apart from the bank’s main facilities: Half of the staff come from non-banking professions, like retail, U/X and startups, other half are employees who can rotate through the project and bring innovative ideas back to the organization"
              }
              linkName={"Read Article"}
              link={
                "https://www.forbes.com/sites/jonathansalembaskin/2016/05/23/a-bank-that-wants-to-disrupt-itself/#7430b8f12f95"
              }
              selectedElement={"media-card1"}
              media={
                <img
                  style={{ width: "424px", height: "319px" }}
                  alt="MobileLife team"
                  className="media-image-size"
                  src={mediaPictureTwo}
                />
              }
              triggerElement={"media-card-trigger-1"}
            />

            <MediaCard
              title={
                "How to challenge the organization of 150 years: MobileLife by Danske Bank"
              }
              description={
                "The way how MobileLife operates and what makes this setup unique in Danske Bank. Key ingredients for success when working on digital solutions in cross-border teams inside 150 year old bank."
              }
              linkName={"Watch video"}
              link={"https://www.youtube.com/watch?v=qa-h8AdQQ_M"}
              selectedElement={"media-card2"}
              triggerElement={"media-card-trigger-2"}
              media={
                <iframe
                  width="340"
                  height="239"
                  title="How to challenge the organization of 150 years: MobileLife by Danske Bank"
                  className="media-image-size"
                  src="https://www.youtube.com/embed/qa-h8AdQQ_M"
                />
              }
            />
            <MediaCard
              title={"Working at MobileLife"}
              description={
                "MobileLifers Daniel (from Spain) and David (from the US) have both chosen Vilnius to pursue their careers in IT. Watch the short video to hear what they think about this choice and their lives in Vilnius, working at MobileLife."
              }
              linkName={"Watch video"}
              link={"https://www.youtube.com/watch?v=pWUsisbjIyQ"}
              selectedElement={"media-card3"}
              triggerElement={"media-card-trigger-3"}
              media={
                <iframe
                  width="340"
                  height="239"
                  title="Working at MobileLife"
                  className="media-image-size"
                  src="https://www.youtube.com/embed/pWUsisbjIyQ"
                />
              }
            />
            <MediaCard
              title={"Innovate or wait? One startup story (in Lithuanian)"}
              description={
                "Key learnings (cultural, managerial and technological) in MobileLife’s journey when creating innovative digital products. "
              }
              linkName={"Watch video"}
              link={"https://www.youtube.com/watch?v=IAjil3Z0INw"}
              selectedElement={"media-card4"}
              triggerElement={"media-card-trigger-4"}
              media={
                <iframe
                  width="340"
                  height="239"
                  title="Innovate or wait? One startup story (in Lithuanian)"
                  className="media-image-size"
                  src="https://www.youtube.com/embed/IAjil3Z0INw"
                />
              }
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="media-page">
          <div style={{ position: "absolute", height: "100%", width: "100%" }}>
            <div style={{ position: "relative", height: "70vh" }} />
            <div id="media-card-trigger-1" />
            <div style={{ position: "relative", height: "10vh" }} />
            <div id="media-card-trigger-2" />
            <div style={{ position: "relative", height: "20vh" }} />
            <div id="media-card-trigger-3" />
            <div style={{ position: "relative", height: "30vh" }} />
            <div id="media-card-trigger-4" />
            <div style={{ position: "relative", height: "20vh" }} />
            <div id="media-card-trigger-5" />
            <div style={{ position: "relative", height: "20vh" }} />
            <div id="media-card-trigger-6" />
          </div>
          <MobileLifeHeart
            heartPinTrigger="#navigation-bar-trigger5"
            heartPinDuration="200%"
            heartDivName="ml-heart-div-media"
            hoverClass="go-to-start-story"
            heartColorClass="ml-heart"
            heartAppearTrigger="#navigation-bar-trigger5"
            heartAppearClassToggle={[".ml-heart-div-media", "show-element2"]}
            heartDisappearTrigger="#navigation-bar-trigger6"
            heartDisappearClassToggle={[".ml-heart-div-media", "hide-element"]}
            heartDisappearTriggerHook={0.7}
            zIndex={80}
            scrollDuration={3800}
          />
          <div className="navigation-media" />
          <div style={{ height: "44vh" }} />
          <div id="trigger3" />

          <Controller>
            <Scene
              triggerElement="#trigger3"
              duration={"150%"}
              pin
              triggerHook={0.17}
            >
              {/* Need to add zIndex so that  it would not be covered by the div of MobileLife heart logo*/}
              <div style={{ position: "relative", left: "30%", zIndex: 99 }}>
                <Controller>
                  <Scene
                    triggerElement="#trigger3"
                    duration={"150%"}
                    pin
                    triggerHook={0.17}
                  >
                    {progress => (
                      <Tween
                        to={{
                          x:
                            document.body.clientWidth >= 1700
                              ? "-90%"
                              : document.body.clientWidth >= 1430
                              ? "-120%"
                              : document.body.clientWidth >= 1365
                              ? "-118%"
                              : document.body.clientWidth >= 1270
                              ? "-125%"
                              : document.body.clientWidth >= 1200
                              ? "-155%"
                              : "-170%"
                        }}
                        totalProgress={progress}
                        paused
                      >
                        <div style={{ position: "relative", zIndex: "99" }}>
                          <div
                            style={{
                              top: "40vh",
                              display: "flex",
                              justifyContent: "flex-start"
                            }}
                          >
                            <div
                              className=" history-style-wide"
                              style={{ position: "relative" }}
                            >
                              <h1 className="media-style">Media</h1>
                            </div>
                            <MediaCard
                              title={"A Bank That Wants To Disrupt Itself"}
                              description={
                                "A team of around 120 people are housed apart from the bank’s main facilities: Half of the staff come from non-banking professions, like retail, U/X and startups, other half are employees who can rotate through the project and bring innovative ideas back to the organization"
                              }
                              linkName={"Read Article"}
                              link={
                                "https://www.forbes.com/sites/jonathansalembaskin/2016/05/23/a-bank-that-wants-to-disrupt-itself/#7430b8f12f95"
                              }
                              selectedElement={"media-card1"}
                              media={
                                <img
                                  alt="MobileLife team"
                                  className="media-image-size"
                                  src={mediaPictureTwo}
                                />
                              }
                              triggerElement={"media-card-trigger-1"}
                            />

                            <MediaCard
                              title={
                                "How to challenge the organization of 150 years: MobileLife by Danske Bank"
                              }
                              description={
                                "The way how MobileLife operates and what makes this setup unique in Danske Bank. Key ingredients for success when working on digital solutions in cross-border teams inside 150 year old bank."
                              }
                              linkName={"Watch video"}
                              link={
                                "https://www.youtube.com/watch?v=qa-h8AdQQ_M"
                              }
                              selectedElement={"media-card2"}
                              triggerElement={"media-card-trigger-2"}
                              media={
                                <iframe
                                  title="How to challenge the organization of 150 years: MobileLife by Danske Bank"
                                  className="media-image-size"
                                  src="https://www.youtube.com/embed/qa-h8AdQQ_M"
                                />
                              }
                            />
                            <MediaCard
                              title={"Working at MobileLife"}
                              description={
                                "MobileLifers Daniel (from Spain) and David (from the US) have both chosen Vilnius to pursue their careers in IT. Watch the short video to hear what they think about this choice and their lives in Vilnius, working at MobileLife."
                              }
                              linkName={"Watch video"}
                              link={
                                "https://www.youtube.com/watch?v=pWUsisbjIyQ"
                              }
                              selectedElement={"media-card3"}
                              triggerElement={"media-card-trigger-3"}
                              media={
                                <iframe
                                  title="Working at MobileLife"
                                  className="media-image-size"
                                  src="https://www.youtube.com/embed/pWUsisbjIyQ"
                                />
                              }
                            />
                            <MediaCard
                              title={
                                "Innovate or wait? One startup story (in Lithuanian)"
                              }
                              description={
                                "Key learnings (cultural, managerial and technological) in MobileLife’s journey when creating innovative digital products. "
                              }
                              linkName={"Watch video"}
                              link={
                                "https://www.youtube.com/watch?v=IAjil3Z0INw"
                              }
                              selectedElement={"media-card4"}
                              triggerElement={"media-card-trigger-4"}
                              media={
                                <iframe
                                  title="Innovate or wait? One startup story (in Lithuanian)"
                                  className="media-image-size"
                                  src="https://www.youtube.com/embed/IAjil3Z0INw"
                                />
                              }
                            />
                          </div>
                        </div>
                      </Tween>
                    )}
                  </Scene>
                </Controller>
              </div>
            </Scene>
          </Controller>
        </div>
      );
    }
  }
}

export default Media;
