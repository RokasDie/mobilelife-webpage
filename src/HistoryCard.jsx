import React, { PureComponent } from "react";
import "./HistoryCard.css";
import { Controller, Scene } from "react-scrollmagic";

class HistoryCard extends PureComponent {
  state = {};

  render() {
    return (
      <Controller>
        <Scene
          triggerElement={"#" + this.props.triggerElement}
          duration={"140%"}
          classToggle={[`.${this.props.selectedElement}`, "show-element3"]}
          triggerHook={0.5}
        >
          <div className={this.props.selectedElement}>
            <div style={{ margin: "10px" }}>
              <h2 className="year-style">{this.props.year}</h2>
              {this.props.logo}
              <hr className="intersection-line" />
              <h3 className="month-style">{this.props.month}</h3>
              <p className="event-description">{this.props.description}</p>
            </div>
          </div>
        </Scene>
        {/* <Scene
                triggerElement={"#" + this.props.triggerElement}
                duration={"200%"}
                classToggle={[`.${this.props.selectedElement}`, "hide-element"]}
                triggerHook={0.0}
              >
                <div />
              </Scene> */}
      </Controller>
    );
  }
}

export default HistoryCard;
