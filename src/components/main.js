import React, { Component } from "react";
import Counter from "./counter";
class Main extends Component {
  state = {
    time: 1,
    agregade: 3,
    value: 0,
    disabledPlus: false,
    disabledMinus: false,
  };

  hadleCount = (a) => {
    let { time, agregade, value, disabledMinus, disabledPlus } = this.state;
    this.setState({ disabledPlus: false, disabledMinus: false });
    this.setState(a > 0 ? { disabledPlus: true } : { disabledMinus: true });
    if (document.getElementById("timeInput").value != "")
      time = Math.floor(document.getElementById("timeInput").value);
    if (document.getElementById("agregatInput").value != "")
      agregade = Math.floor(document.getElementById("agregatInput").value);

    setTimeout(() => {
      this.setState({ time, agregade, value: value + agregade * a });
      this.setState(a > 0 ? { disabledPlus: false } : { disabledMinus: false });
    }, time * 1000);
    console.log("state = ", this.state);
  };

  render() {
    return (
      <div className="main">
        <div className="numbers d-flex">
          <input
            id="timeInput"
            placeholder={`Time: (default : ${this.state.time})`}
            className="form-control m-4"
            type="number"
          />
          <input
            id="agregatInput"
            placeholder={`Agregade: (default : ${this.state.agregade})`}
            className="form-control m-4"
            type="number"
          />
        </div>
        <Counter
          disabledMinus={this.state.disabledMinus}
          disabledPlus={this.state.disabledPlus}
          value={this.state.value}
          click={this.hadleCount}
        />
      </div>
    );
  }
}
export default Main;
