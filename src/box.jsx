import React, { Component } from "react";
import "./box.scss";

class Box extends Component {
  render() {
    const { pageX, pageY, size } = this.props;

    return (
      <div
        style={{
          width: size,
          height: size,
          fontSize: size / 5,
          marginTop: pageY - size / 2,
          marginLeft: pageX - size / 2,
          background: this.props.color,
        }}
        className="box"
      >
        <p>X : {pageX}</p>
        <p>Y : {pageY}</p>
      </div>
    );
  }
}

export default Box;
