import React, { Component } from "react";
import "./History.css";
import HistoryCard from "./HistoryCard";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import MobileLifeHeart from "./MobileLifeHeart";
import vilniusLogo from "./images/vilnius.png";
import JuneLogo from "./JuneLogo";
import SundayLogo from "./SundayLogo";
import MobileLifeOriginalLogo from "./MobileLifeOriginalLogo";
import MobileLifeLogoBreak from "./MobileLifeLogoBreak";

const TweenComponent = () => (
  <Controller>
    <Scene triggerElement="#trigger2" duration={"180%"} pin triggerHook={0.32}>
      {(progress, event) => (
        <Tween
          to={{
            x:
              document.body.clientWidth >= 1700
                ? "-100%"
                : document.body.clientWidth >= 1430
                ? "-135%"
                : document.body.clientWidth >= 1270
                ? "-160%"
                : document.body.clientWidth >= 1200
                ? "-155%"
                : "-170%"
          }}
          totalProgress={progress}
          paused
        >
          <div
            style={{
              top: "40vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <div
              className=" history-style-wide"
              style={{ position: "relative" }}
            >
              <h1 className="history-style">History</h1>
            </div>

            <HistoryCard
              year={"2014"}
              month={"August"}
              description={
                "Danske Bank establishes a digital innovation hub called MobileLife, which is about to uptake a critically important task of taking the bank’s digital products to a new level"
              }
              triggerElement={"history-card-trigger-1"}
              selectedElement={"event-card1"}
              logo={<MobileLifeOriginalLogo />}
            />
            <HistoryCard
              year={"2015"}
              month={"September"}
              description={
                "After intensively working on it for a year, Mobilelife launches its first ever product called 'Sunday in Denmark'"
              }
              triggerElement={"history-card-trigger-2"}
              selectedElement={"event-card2"}
              logo={<SundayLogo />}
            />
            <HistoryCard
              year={"2016"}
              month={"January"}
              description={
                "Mobilelife operations scale and a team is established in Lithuania. The team is to work together with Danish colleagues hand in hand developing and innovating new products"
              }
              triggerElement={"history-card-trigger-3"}
              selectedElement={"event-card3"}
              logo={
                <img
                  alt="Vilnius city logo"
                  style={{
                    left: "30%",
                    position: "absolute",
                    transform: "translate3d(0, -20px,0)",
                    width: "160px"
                  }}
                  src={vilniusLogo}
                />
              }
            />
            <HistoryCard
              year={"2017"}
              month={"June"}
              description={
                "A new product called 'June' is launched in Denmark. It's a milestone in the history of Mobilelife, as it is the first product developed in Lithuania that sees the light of day"
              }
              triggerElement={"history-card-trigger-4"}
              selectedElement={"event-card4"}
              logo={<JuneLogo />}
            />
            <HistoryCard
              year={""}
              month={"August"}
              description={
                "'Sunday' and 'June' branch out and become dedicated teams in supporting and developing the products further. This marks the end of MobileLife as a legal organization, but the culture is here to stay for a long time"
              }
              triggerElement={"history-card-trigger-6"}
              selectedElement={"event-card6"}
              logo={<MobileLifeLogoBreak />}
            />
          </div>
        </Tween>
      )}
    </Scene>
    <Scene
      triggerElement="#trigger-success-text"
      duration={"200%"}
      classToggle={[".success-story-one", "show-element2"]}
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
);

class History extends Component {
  state = { clientWidth: document.body.clientWidth };
  render() {
    // Mobile version
    if (this.state.clientWidth < 1200) {
      return (
        <div style={{ opactiy: 1 }}>
          <div
            style={{
              height: "40vh"
            }}
          />
          <div className=" history-style-wide" style={{ position: "relative" }}>
            <h1 className="history-style">History</h1>
          </div>

          <HistoryCard
            year={"2014"}
            month={"August"}
            description={
              "Danske Bank establishes a digital innovation hub called MobileLife, which is about to uptake a critically important task of taking the bank’s digital products to a new level"
            }
            triggerElement={"history-card-trigger-1"}
            selectedElement={"event-card1"}
            logo={<MobileLifeOriginalLogo />}
          />
          <HistoryCard
            year={"2015"}
            month={"September"}
            description={
              "After intensively working on it for a year, Mobilelife launches its first ever product called 'Sunday in Denmark'"
            }
            triggerElement={"history-card-trigger-2"}
            selectedElement={"event-card2"}
            logo={<SundayLogo />}
          />
          <HistoryCard
            year={"2016"}
            month={"January"}
            description={
              "MobileLife operations scale and a team is established in Lithuania. The team is set to work together with Danish colleagues hand in hand developing and innovating new products"
            }
            triggerElement={"history-card-trigger-3"}
            selectedElement={"event-card3"}
            logo={
              <img
                alt="Vilnius city logo"
                style={{
                  left: "30%",
                  position: "absolute",
                  transform: "translate3d(0, -20px,0)",
                  width: "160px"
                }}
                src={vilniusLogo}
              />
            }
          />
          <HistoryCard
            year={"2017"}
            month={"June"}
            description={
              "A new product called 'June' is launched in Denmark. It's a milestone in the history of MobileLife, as it is the first product developed in Lithuania that sees the light of day"
            }
            triggerElement={"history-card-trigger-4"}
            selectedElement={"event-card4"}
            logo={<JuneLogo />}
          />

          <HistoryCard
            year={""}
            month={"August"}
            description={
              "'Sunday' and 'June' branch out and become dedicated teams in supporting and developing the products further. This marks the end of MobileLife as a legal organization, but the culture is here to stay for a long time"
            }
            triggerElement={"history-card-trigger-6"}
            selectedElement={"event-card6"}
            logo={<MobileLifeLogoBreak />}
          />
        </div>
      );
    } else {
      return (
        <div className="fourth-page">
          <MobileLifeHeart
            heartPinTrigger="#navigation-bar-trigger4"
            heartPinDuration="200%"
            heartDivName="ml-heart-div-history"
            hoverClass="go-to-start-story"
            heartColorClass="ml-heart"
            heartAppearTrigger="#navigation-bar-trigger4"
            heartAppearClassToggle={[".ml-heart-div-history", "show-element2"]}
            heartDisappearTrigger="#navigation-bar-trigger5"
            heartDisappearClassToggle={[
              ".ml-heart-div-history",
              "hide-element"
            ]}
            heartDisappearTriggerHook={0.7}
            zIndex={99}
            scrollDuration={3000}
          />
          <div style={{ position: "absolute", height: "100%", width: "100%" }}>
            <div style={{ position: "relative", height: "70vh" }} />
            <div id="history-card-trigger-1" />
            <div style={{ position: "relative", height: "10vh" }} />
            <div id="history-card-trigger-2" />
            <div style={{ position: "relative", height: "20vh" }} />
            <div id="history-card-trigger-3" />
            <div style={{ position: "relative", height: "20vh" }} />
            <div id="history-card-trigger-4" />
            <div style={{ position: "relative", height: "20vh" }} />
            <div id="history-card-trigger-5" />
            <div style={{ position: "relative", height: "20vh" }} />
            <div id="history-card-trigger-6" />
          </div>

          <div className="navigation-fourth" />
          <div style={{ height: "44vh" }} />
          <div id="trigger2" />

          <Controller>
            <Scene
              triggerElement="#trigger2"
              duration={"180%"}
              pin
              triggerHook={0.32}
            >
              <div style={{ position: "relative", left: "30%" }}>
                <TweenComponent />
              </div>
            </Scene>
          </Controller>
        </div>
      );
    }
  }
}

export default History;
