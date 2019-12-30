import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.state = { count: 0 };
  }

  onClickButton() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const counterStype = {
      margin: "16px"
    }

    return (
      <div style={counterStype}>
        <div>
          <button onClick={this.onClickButton}>Click Me</button>
          <div>
            Click Count: <span id="clickCount">{this.state.count}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ClickCounter;
