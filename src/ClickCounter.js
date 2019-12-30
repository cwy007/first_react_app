import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.onclickButton = this.onclickButton.bind(this);
    this.state = { count: 0 };
  }

  onclickButton() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.onclickButton}>Click Me</button>
        <div>
          Click Count: {this.state.count}
        </div>
      </div>
    );
  }
}

export default ClickCounter;
