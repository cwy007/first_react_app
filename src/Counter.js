import React, { Component, PropTypes } from 'react';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {

  constructor(props) {
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

    this.state = {
      count: props.initValue
    }
  }

  onClickIncrementButton() {
    this.updateCount(true);
  }

  onClickDecrementButton() {
    this.updateCount(false);
  }

  updateCount(isIncrement) {
    const previousValue = this.state.count;
    const newValue = isIncrement ? previousValue + 1 : previousValue - 1;

    this.setState({ count: newValue })
    this.props.onUpdate(newValue, previousValue)
  }

  render() {
    const { caption } = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

// Counter.propTypes = {
//   caption: PropTypes.string.isRequired,
//   initValue: PropTypes.number,
//   onUpdate: PropTypes.func
// };

Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => f //什么都不做的函数
};

export default Counter;

// 把自己状态改变的信息传递给外层的组件
// 事件处理方法

// 更新之后的新值，更新之前的值
// 如何使用这两个值，是父组件的逻辑，子组件不用操心
//