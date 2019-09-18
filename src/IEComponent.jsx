import React, { Component } from "react";
import "./IEComponent.css";

class IEComponent extends Component {
  state = {
    barPosition: "",
    isIntersecting: false,
    intersectionRatio: "",
    currentY: ""
  };

  render() {
    return (
      <div className="ie-component">
        <div className="white-text-one">Save developers!</div>
        <div className="white-text-two">Don't use Internet Explorer</div>
      </div>
    );
  }
}

export default IEComponent;
