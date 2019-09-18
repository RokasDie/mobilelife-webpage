import React, { Component } from "react";
import "./Products.css";
import { Controller, Scene } from "react-scrollmagic";
import juneLogo from "./images/June_logo_neg_web_1.svg";
import sundayLogo from "./images/sunday-logo-with-danskebank.svg";
import MobileLifeHeart from "./MobileLifeHeart";

class ProductsEdge extends Component {
  state = {
    isIntersecting: false,
    intersectionRatio: "",
    currentY: ""
  };

  render() {
    return (
      <div className="fifth-page-background">
        <div className="fifth-page">
          {/* Mobilelife Heart */}
          <MobileLifeHeart
            heartPinTrigger="#navigation-bar-trigger3"
            heartPinDuration="80%"
            heartDivName="ml-heart-div-products"
            hoverClass="go-to-start-products"
            heartColorClass="ml-heart-white"
            heartAppearTrigger="#navigation-bar-trigger3"
            heartAppearClassToggle={[".ml-heart-div-products", "show-element2"]}
            heartDisappearTrigger="#trigger-visit-june"
            heartDisappearClassToggle={[
              ".ml-heart-div-products",
              "hide-element"
            ]}
            heartDisappearTriggerHook={0.4}
          />

          <div className="navigation-fifth" />
          <div style={{ height: "70vh" }} />
          <div style={{}}>
            <div style={{ top: "45%" }}>
              <div id="trigger-visit-june" />
              <div id="trigger-visit-sunday" />
              <div className="product-layout">
                <div style={{ textAlign: "center" }}>
                  <img
                    alt="Sunday product logo"
                    src={sundayLogo}
                    className="sunday-logo product-group"
                  />
                  <h2 className={"fifth-page-text product-group"}>
                    Everybody needs a place to live, and getting a mortgage is
                    just a step towards that final goal. This was the
                    fundamental insight that led us to develop the first version
                    of Sunday.dk
                  </h2>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-sunday-button product-group"
                    href="https://sunday.dk/"
                  >
                    Visit Sunday
                  </a>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img
                    alt="June product logo"
                    src={juneLogo}
                    className="june-logo product-group"
                  />
                  <h2 className="fifth-page-text product-group">
                    It’s so easy to spend money and saving and investing has
                    been very complicated far too long. June.dk attempts to
                    change that.
                  </h2>

                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-june-button product-group"
                    href="https://www.june.dk/"
                  >
                    Visit June
                  </a>
                </div>
              </div>
              <Controller>
                <Scene
                  triggerElement="#trigger-visit-sunday"
                  duration={"200%"}
                  classToggle={[".product-group", "show-element"]}
                  triggerHook={0.95}
                >
                  <div />
                </Scene>
                <Scene
                  triggerElement="#trigger-visit-sunday"
                  duration={"200%"}
                  classToggle={[".product-group", "hide-element"]}
                  triggerHook={0.0}
                >
                  <div />
                </Scene>
              </Controller>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsEdge;
