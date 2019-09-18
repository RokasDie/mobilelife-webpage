import React, { Component } from "react";
import "./App.css";
import IntroductionPage from "./IntroductionPage";
import Story from "./Story";
import Mindset from "./Mindset";
import History from "./History";
import Products from "./Products";
import Media from "./Media";
import NavigationBar from "./NavigationBar";
import NavigationProgress from "./NavigationProgress";
import StoryEdge from "./StoryEdge";
import MindsetEdge from "./MindsetEdge";
import ProductsEdge from "./ProductsEdge";
import ToTopButton from "./ToTopButton";

function isEDGE() {
  return (
    navigator.appName === "Netscape" &&
    navigator.appVersion.indexOf("Edge") > -1
  );
}

class App extends Component {
  state = {
    barPosition: "",
    isIntersecting: false,
    intersectionRatio: "",
    currentY: ""
  };

  render() {
    return (
      <div>
        <IntroductionPage />
        <div id="navigation-bar-trigger1" />
        {isEDGE() ? <StoryEdge /> : <Story />}

        <div id="navigation-bar-trigger2" />
        {isEDGE() ? <MindsetEdge /> : <Mindset />}

        <div id="navigation-bar-trigger3" />
        {isEDGE() ? <ProductsEdge /> : <Products />}

        <div id="navigation-bar-trigger4" />
        <History />
        <div id="navigation-bar-trigger5" />

        <Media />
        <div id="navigation-bar-trigger6" />
        <NavigationProgress />
        <NavigationBar />
        <ToTopButton buttonAppearTrigger="#navigation-bar-trigger1" />
      </div>
    );
  }
}

export default App;
