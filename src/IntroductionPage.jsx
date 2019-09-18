import React, { Component } from "react";
import "./IntorductionPage.css";
import logo from "./images/splash.png";
import CanvasDraw from "react-canvas-draw";
import { ReactComponent as ArrowScrollDown } from "./images/chevron_down-01.svg";
import { ReactComponent as EmbraceUncertainty } from "./images/EMBRACE UNCERTAINTY.svg";

function HurdyMudyMan(props) {
  return (
    <div className="hurdy-mudy-man" style={hurdyMudyManStyle}>
      Paint me!
    </div>
  );
}

function JunePlusSunday(props) {
  return (
    <div className="june-sunday-kml" style={junePlusSundayStyle}>
      JUNE + SUNDAY = KML
    </div>
  );
}

function MobileLifeSplash(props) {
  return (
    <div className="mobile-life-logo">
      <img alt="MobileLife" src={logo} height="123.36" width="290.18" />
    </div>
  );
}

class IntroductionPage extends Component {
  state = {
    showComponents: true
  };

  hoverElement = () => {
    console.log("hovering");
  };

  render() {
    return (
      <div className="first-page">
        {/* Only enable canvas painting if width is bigger than 1440px */}
        {document.body.clientWidth > 1270 ? (
          <CanvasDraw
            style={{ position: "absolute" }}
            hideGrid={true}
            lazyRadius={0}
            canvasWidth={"100vw"}
            canvasHeight={"100vh"}
            backgroundColor={"#0022a7"}
            brushRadius={6}
            brushColor="#fff"
          />
        ) : (
          ""
        )}

        <MobileLifeSplash />
        <HurdyMudyMan />
        <EmbraceUncertainty className="embrace-uncertainty" />
        <JunePlusSunday />

        <ArrowScrollDown className="arrow-down" />
      </div>
    );
  }
}

const hurdyMudyManStyle = {
  height: "47.6px",
  width: "178.94px",
  opacity: 0.19,
  color: "#fff",
  fontFamily: "Chalkduster",
  fontSize: "23px",
  letterSpacing: "1.44px",
  lineHeight: "20px",
  textAlign: "center",
  transform: "rotate(-9deg)"
};

const junePlusSundayStyle = {
  height: "47.39px",
  width: "226.75px",
  opacity: 0.19,
  color: "#FFF",
  fontFamily: "Chalkduster",
  fontSize: "16px",
  letterSpacing: "1.44px",
  lineHeight: "20px",
  textAlign: "center",
  transform: "rotate(7deg)"
};

export default IntroductionPage;
