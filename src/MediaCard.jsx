import React, { PureComponent } from "react";
import "./MediaCard.css";
import { Controller, Scene } from "react-scrollmagic";

class MediaCard extends PureComponent {
  state = {};

  render() {
    return (
      <Controller>
        <Scene
          triggerElement={"#" + this.props.triggerElement}
          duration={"180%"}
          classToggle={[`.${this.props.selectedElement}`, "show-element3"]}
          triggerHook={0.5}
        >
          <div className={this.props.selectedElement} style={{}}>
            <div
              className="media-image-size"
              style={{
                borderRadius: "20px",
                overflow: "hidden"
              }}
            >
              {this.props.media}
            </div>

            <h2 className="article-style">{this.props.title}</h2>
            {/* If the screen size is higher than 1200 add the intersection line here otherwise put it below */}
            {document.body.clientWidth > 1200 ? (
              <hr className="intersection-line" />
            ) : (
              ""
            )}

            <h3 className="description-style">{this.props.description}</h3>
            <a href={this.props.link} rel="noopener noreferrer" target="_blank">
              <p className="source-link">{this.props.linkName}</p>
            </a>
            {document.body.clientWidth < 1200 ? (
              <hr className="intersection-line" />
            ) : (
              ""
            )}
          </div>
        </Scene>
      </Controller>
    );
  }
}

export default MediaCard;
