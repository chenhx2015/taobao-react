2018.09.11
本次主题：基本用法 + react 和 vue 的对比
下次主题：react高级用法 + redux + react-redux + react 一些中间件的使用

一: react 和 vue 的对比:
相同点:
1. 数据驱动视图，提供响应式的视图组件
2. 都有virtual DOM， 组件化开发，通过props参数进行父子组件数据的传递，都实现webComponents规范
3. 都有native解决方案，reactnative（facebook团队） vs weex（阿里团队）

不同点:
1. 作者 (facebook vs 个人！)
2. 生命周期（一些常用的及注意事项）
   https://www.jianshu.com/p/3fbbb0bce78a
3. 模板和JSX
4. 状态管理机制
   redux, react-redux 和 vuex
5. 组件传值
6. 数据绑定：Vue双向数据绑定的方式；React，则采取单向数据流的方式

二: react组件状态state
    https://www.jianshu.com/p/c6257cbef1b1

三: 如何选择使用场景
    1）期待模板搭建 -- vue  个人认为模板更容易理解
    2）期待简单和“能用就行”的东西 -- vue
    3）期待应用尽可能的小和快 -- vue
    4）期待构建一个大型应用程序 -- react
    5）期待同时适用于Web端和原生APP的框架 -- react
    6）期待最大的生态系统 -- react

四: 推荐文章
    https://blog.csdn.net/chaunceyw/article/details/77895964
    http://www.jianshu.com/p/8b94f1b98578
    https://cn.vuejs.org/v2/guide/comparison.html

五: 参考资料
    https://react.docschina.org/docs/introducing-jsx.html
    https://reacttraining.com/react-router/web/api/HashRouter
    http://www.redux.org.cn/docs/basics/ExampleTodoList.html
    http://es6.ruanyifeng.com/


<!-- 相同点:
1. 虚拟DOM
2. 父子组件传值，数据流

不同点：
1. 函数
2. 状态提升 -> redux -->

<!-- 下次主题：react高级用法 + redux + react-redux
下次主题：react 一些中间件的使用 -->
# es6语法：
  1. 箭头函数
  2. 类
  3. let
  4. const

# jsx相关：
  1. JSX 语法
  2. JSX 防注入攻击
  3. JSX 代表 Objects
  4. JSX 属性

<!--
  为什么要使用 JSX ? 优点： ---------------
  1. JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化
  2. 它是类型安全的，在编译过程中就能发现错误
  3. 使用 JSX 编写模板更加简单快速
  -->

# react 一般用法：
  https://react.docschina.org/
  1. 渲染元素到DOM中: ReactDOM.render()
  2. 元素更新，并且只会更新改变了的部分 （ 即使每秒都创建了整个新的UI树 ）
  3. 组件/props
     3.1 函数定义组件 、es6 class 定义组件 ( 组件名称必须以大写字母开头,组件的返回只能有一个根元素, 也可以用类似纯函数的方式定义组件 )
         即：类定义 ／ 函数定义
     3.2 容器组件和展示组件
     3.3 props 的只读性 (状态state, setState(), redux)
     3.4 生命周期 (将生命周期方法添加到类中)
     3.5 状态更新可能是异步的--状态更新合并（ 可以调用 setState() 独立地更新它们 ）
     3.6 数据自顶向下流动
  4. 事件处理
     4.1 阻止默认行为 preventDefault
     4.2 事件传递参数要放在e后面
  5. 条件渲染 ( 元素变量, 与运算符&&, 三目运算符, 阻止组件渲染)
  6. 列表 && keys
     6.1 不建议用索引来当key,最好用id
     6.2 元素的key只有在它和它的兄弟节点对比时才有意义,注意放置位置 （ key在其兄弟之间应该是独一无二的。然而，它们不需要是全局唯一的 ）,需要也可作为属性传递
  7. 表单
     7.1 input, textarea, select都通过传入一个value属性来实现对组件的控制
     7.2 有处理多个受控的input元素时,通过给每个元素添加一个name属性,来让处理函数根据 event.target.name的值来选择做什么
  8. 状态提升 -- redux
  9. 组合 vs 继承
     9.1 props.children


2018.9.21
一: 异步action
  1. 如何把之前定义的同步 action 创建函数和网络请求结合起来呢？ --- 标准做法是使用 Redux Thunk 中间件
  2. 但是Redux Thunk不是唯一的方式
     * redux-promise / redux-promise-middleware 来 dispatch Promise
     * redux-observable 来 dispatch Observable
     * redux-saga 中间件来创建更加复杂的异步 action
     * redux-pack 中间件 dispatch 基于 Promise 的异步 Action
二: middleware
  1. 可以使用redux middleware 来进行日志记录，创建崩溃报告，调用异步接口或者路由等等



2018.9.25
高级部分:
 1. 深入JSX
    1.1 本质上来讲，JSX只是为 React.createElement(component, props, ...children) 方法提供的语法糖
    1.2 React 必须声明 （如果你使用 <script> 加载 React，它将作用于全局）
    1.3 点表示法来引用组件
    1.4 首字母大写
    1.5 在运行时选择类型
    1.6 属性
        1. 使用 JavaScript 表达式
        2. 字符串常量
        3. 默认为 true （不建议这样做）
        4. 扩展属性
    1.7 子代
        作为特殊的参数传递 props.children
        传递子代的方法有以下几种
        1. JSX, 注意：react组件可以通过数组的形式返回多个元素
        2. JavaScript 表达式
        3. 函数
        4. 布尔值、Null 和 Undefined 被忽略
           这在根据条件来确定是否渲染React元素时非常有用, 但是要确保 && 前面的表达式始终为布尔值，因为0会被打印出来
           如果你想让类似 false、true、null 或 undefined 出现在输出中，你必须先把它转换成字符串
            <div>
              My JavaScript variable is {String(myVariable)}.
            </div>
 2. 使用propTypes检查类型(使用prop-types库)
    * 出于性能原因，propTypes 只在开发模式下进行检查
      和在组件里面定义有什么区别 ？？？
    2.1 propTypes
        1. 不仅仅是类型，也可以是某个特定值之一 eg: PropTypes.oneOf(['News', 'Photos'])
        2. 也可以是对象之一，数组之一等等
    2.2 限制单个子代
        1. 使用 PropTypes.element 你可以指定只传递一个子代
    2.3 属性默认值
        1. 通过配置 defaultProps 为 props定义默认值
 3. 静态类型检查
    * flow && typescript
    从编译过的代码中剥离 Flow 语法 ？？？
    不是很能理解这一部分  --- **** ???

2018.9.26
 4. Refs & DOM
    4.1 何时使用 （不要过度使用）:
        * 处理焦点、文本选择或媒体控制
        * 触发强制动画
        * 集成第三方 DOM 库
    4.2 通过 current 属性对节点进行访问
        注意在什么时候传入current属性,什么时候改回null: 组件加载时就会传入
    4.3 注意不能在函数式组件上使用refs,因为它们没有实例 (但是在内部可以使用)
    4.4 可以为DOM元素和类组件添加 Ref
    4.5 对父组件暴露DOM节点
    4.6 另外一种设置ref的方式：回调ref,更加细致的控制何时ref被设置和解除
 5. 非受控组件
    5.1 通过 defaultValue, defaultChecked 设置初始值, 而不是value
    5.2 文件输入标签, 通过 file API 进行操作
 6. 性能优化
   （可以多看几遍，做到灵活使用）
    6.1 使用生产版本 ？？？
    6.2 使用 Chrome Performance 归档组件
    6.3 避免重复渲染
    6.4 shouldComponentUpdate应用, 可以单独设置是返回 true 还是 false
    6.5 不会突变的数据的力量
    6.6 使用不可突变的数据结构
        * immutable.js
        * seamless-immutable
        * immutability-helper

2018.9.27
 7. 协调 Reconciliation
    （react diff算法的选择让组件更新可预测，并使得高性能应用足够快）
    7.1 目的
      1. React需要算出如何高效更新UI以匹配最新的树
    7.2 diff算法
      1. 不同类型的元素
      2. 相同类型的DOM元素
      3. 相同类型的组件元素
      4. 递归子节点 （解决方法key）
      5. 权衡
 8. context
    为了避免通过中间元素传递 props
    8.1 何时使用context
    8.2 render props
 9. Fragments
 10. Portals
 11. render props
    render prop 是一个组件用来了解要渲染什么内容的函数 prop
    11.1 在交叉关注点使用 render props （可借鉴）
    11.2 使用props而非render
    11.3 并不是真正的添加到JSX元素的attributes列表中，相反，可以直接放置到元素的内部
    11.4 注意：要直接申明类型 propTpyes
    11.5 在 React.PureComponent 中使用 render props 要注意









