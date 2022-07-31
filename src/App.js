import React, { Component } from "react";
import "./App.css";
import Box from "./box";

class App extends Component {
  state = {
    boxes: [],
  };
  randomSize() {
    return Math.floor(Math.random() * 100) + 20;
  }
  handleColor = () => {
    let color = "#";
    for (let i = 0; i < 3; i++) {
      color += Math.floor(Math.random() * 9);
    }
    return color;
  };

  event = (e) => {
    this.state.boxes.push({
      pageX: e.pageX,
      pageY: e.pageY,
      id: this.state.boxes.length,
      color: this.handleColor(),
      size: this.randomSize(),
    });
    this.setState(this.state);
  };

  render() {
    const { boxes } = this.state;
    return (
      <div onClick={this.event} className="App">
        {boxes.map((box, idx) => (
          <Box
            key={box.id}
            pageX={box.pageX}
            pageY={box.pageY}
            color={box.color}
            size={box.size}
          />
        ))}
      </div>
    );
  }
}

export default App;
