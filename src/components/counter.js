import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="counter d-flex alig-items-center justify-content-center gap-4 mt-3">
        <button
          disabled={this.props.disabledMinus}
          onClick={() => this.props.click(-1, "disabledMinus")}
          className="btn btn-danger"
        >
          Decrement
        </button>
        <div
          style={{ borderRadius: 5, color: "white" }}
          className="bg-secondary p-2 fs-4"
        >
          {this.props.value}
        </div>
        <button
          disabled={this.props.disabledPlus}
          onClick={() => this.props.click(1, "disabledPlus")}
          className="btn btn-primary"
        >
          Increment
        </button>
      </div>
    );
  }
}
export default Counter;
