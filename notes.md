2018.09.11
本次主题：基本用法 + react-router + react 和 vue 的对比
下次主题：react高级用法 + redux + react-redux
下次主题：react 一些中间件的使用
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

# react 一般用法：
  1. 渲染元素到DOM中: ReactDOM.render()
  2. 元素更新，并且只会更新改变了的部分 （ 即使每秒都创建了整个新的UI树 ）
  3. 组件/props
     3.1 函数定义组件 、es6 class 定义组件 ( 组件名称必须以大写字母开头,组件的返回只能有一个根元素 )
     3.2 容器组件和展示组件
     3.3 props 的只读性 (setState(), redux)
     3.4 生命周期
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

