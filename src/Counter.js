import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    // 给 this.props 是 React.Component 构造函数的工作之一
    super(props);

    // 两个成员函数
    // 当前 this 的执行环境
    // 绑定 this 到当前的实例对象
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

    this.state = {
      count: props.initValue || 0
    }
  }

  // this.state 读取组件的当前 state
  // this.setState() 用例改变组件的 state
  // 1. 驱动组件重新渲染
  // 2. 改变 state 的值
  //
  onClickIncrementButton() {
    this.setState({ count: this.state.count + 1 });
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

// ‘黑话’
// 组件实例被构造之后
// 类实例的成员函数
// 父组件传递过来的 props 值
// 给 this.props 是 React.Component 构造函数的工作之一
// 在构造函数中通过参数 props 获取传入 prop 值
// 在其他函数中可以通过 this.props 访问传入的 prop 值
// ES6 的解构赋值 destructuring assignment
// prop 为组件的对外接口
// 让组件证明自己的接口规范
// 规范：
// 1. 支持哪些 prop
// 2. 每个 prop 应该是什么样的格式
// es6 方法定义的组件类
// 是声明，也是限制 -- propTypes
// 运行时，静态代码检查
// 修饰符 mark
// required vs undefined
// propTypes 可以尽早发现代码中的错误
// 防止不正确的 prop 使用方法
// propTypes 只是辅助开发的功能，并不会改变组件的行为
// 代码空间
// propTypes 检查要消耗 cpu 计算资源
// 开发者 vs 最终用户
// 更优
// babel-react-optimize


Counter.propTypes = {
  caption: PropTypes.string.isRequired, // 标题，说明文字
  initValue: PropTypes.number
}

// 驱动组件渲染：prop、state
// state 为组件的内部状态
// React 组件不能修改传入 prop，记录自身数据变化要使用 state
// initValue prop
// 用户点击后，产生的变化需要组件通过 state 来存储
// 初始化 state
// 组件类

Counter.defaultProps = {
  initValue: 0
};

// prop vs state
// state 相当于组件的记忆
// state 存在的意义就是被修改
// setState()

// UI=render(data)

// render 函数
// react 组件
// 没有副作用的纯函数
// 修改 props 是一个副作用，应该避免
// 一条红线：不要修改传入的 props 对象

// 生命周期：
// 创建、修改、删除
// 装载过程 Mount
// 更新过程 Update
// 卸载过程 Unmount

// React 库依次调用组件的一些成员函数（生命周期函数）
// 定制组件，实际上就是定制这些生命周期函数
// 1. mount
// constructor
// getInitState
// getDefaultProps
// componentWillMount
// render
// componentDidMount

// 无状态的组件类不需要定义构造函数
// 初始化 state
// 绑定成员函数的 this 环境
// 成员函数，组件实例
// 将实例的特定函数绑定 this 为当前实例
// 让 this 始终指向当前组件实例
// this.foo = ::this.foo;
// this.foo = this.foo.bind(this);
// :: 为 bind 操作符

// getInitialState 返回值用来初始化 this.state
// 在 React.createClass 创建的组件类中才起作用
// 在 es6 创建的语法不起作用

// getDefaultProps 返回值可以作为 props 的初始值
// 在 es6 定义的组件类中不起作用

// 类属性
// 类的实例对象属性

// render 函数是 mount 阶段的一个生命周期函数
// React.Component 对除 render 之外的生命周期函数都有默认实现
// 组件的作用是渲染一些东西
// render 不做实际的渲染动作，返回一个 jsx 描述的解构
// React 来操作渲染流程
// 组件有时选择不画任何东西
// null ， false
// render 为一个纯函数，根据 this.state 和 this.props 决定返回的结果
// 引发重新绘制
// render 函数本身并不往dom树上渲染内容
// 渲染 == 挂载
// React 把所有组件返回的结果综合起来，才知道如何产生对应的 dom 修改
// React 库

// componentDidMount 装载过程的收尾

// “同构” 应用，在服务器段使用 React 的情况
// 实现上的决定
// 设计上
// 通过 React 组件产生的只是一个纯粹的字符串而已

// 同 ajax 获取数据，填充组件内容
// 让 React 与其他 UI 库配合使用

// d3.js
// React 是用来取代 JQuery 的
//
// 组件对应的 dom 已经的存在，所有的`事件处理函数已经设置好`
//
// 装载会显示出第一印象
// 用户操作，改变展示的内容
// props 或 state 改变，引发组件的更新过程

// update
// componentWillReceiveProps
// shouldComponentUpdate 决定一个组件什么时候不需要渲染
// componentWillUpdate
// render
// componentDidUpdate

// 有的更新过程不会执行所有的函数
// 根据新的 nextProps 计算出是不是要更新内部状态 state
// 更新内部状态的方法 this.setState

// this.forceUpdate()
// 在 react 的组件组合中，可以只渲染一个子组件，其他组件完全不需要渲染，提高 react 性能的重要方式

// shouldComponentUpdate 要求有返回结果
// nextProps, nextState
// 逻辑输入：组件的 props 和 state
// 更新过程可以放生在浏览器端和服务器端
// 使用 react 做服务器端渲染，基本不经历更新过程
// 服务器端只需要产出 html 字符串
// 一个装载过程就足够产出 html

// unmount
// componentWillUnmount
// 在 react 组件将要从 dom 树上删除之前，对应的 componentWillUnmount 函数会被调用
// 适合做一些清理工作
// 非 react 创建的一些 dom 元素
// 可能的内存泄漏
//