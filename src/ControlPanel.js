import React, { Component } from 'react';
import Counter from './Counter.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.onCounterUpdate = this.onCounterUpdate.bind(this);

    this.initValues = [0, 10, 20];

    const initSum = this.initValues.reduce((a, b) => a + b, 0);
    this.state = {
      sum: initSum
    };
  }

  onCounterUpdate(newValue, previousValue) {
    const valueChange = newValue - previousValue;
    this.setState({ sum: this.state.sum + valueChange });
  }

  render() {
    return (
      <div style={style}>
        <Counter onUpdate={this.onCounterUpdate} caption="First" />
        <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]} />
        <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]} />
        <hr />
        <div>Total Count: {this.state.sum}</div>
      </div>
    )
  }
}

export default ControlPanel;

// onUpdate 回调函数
// bug
// 数据的不一致
// 逻辑上应该相同的状态分别存在不同的组件中
// 状态的领头羊，以它的状态为准
// 数据源，全局状态
// 全局状态是唯一的可靠数据源
// 组件质量，组件对外接口清晰简洁
