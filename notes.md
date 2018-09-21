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

