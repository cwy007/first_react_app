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

// flux vs redux
// 单向数据流
// 理念
// react + redux
// React 是用来替换 JQuery 的，Flux 是替换 Ember.js mvc 框架的

// React 相当于 V，view 部分
// 将一个应用划分为多个组件
// 分而治之
// 业务逻辑
// 界面渲染逻辑
// view 和 model 可以直接通信
// 认知差别
// controler--model--view
// 单向数据流
// 传递消息
// flux：更严格的数据流控制

// Dispatcher 处理动作分发，维持 Store 之间的依赖关系
// Store 负责存储数据和处理数据相关逻辑
// Action 驱动 Dispatcher 的 js 对象
// View 视图部分，负责显示用户界面
