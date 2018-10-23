// Promise
// example 1:
// let promise = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         resolve(3)
//     }, 1000)
// });
// promise.then(function(result) {
//   console.log('resolved.', result);
//   return result
// })

// console.log('Hi!');


// example 2:
// setTimeout(() => {
//     console.log(1)
// }, 3000);

// new Promise((resolve, reject) => {
//     console.log(2)
//     setTimeout(() => {
//         console.log(3)
//     }, 0);
//     console.log(4)
// })

// console.log(5)

// example 3:
// var id = 1
// var obj = {
//     id: 2,
//     fn1() {
//         console.log(id)
//         console.log(this.id)
//     },
//     fn2: () => {
//         console.log(id)
//         console.log(this.id)
//     }
// }
// var fn0 = obj.fn1

// fn0()
// obj.fn1()
// obj.fn2()

// example 4:
// 1. 全局作用域或者普通函数中this指向全局对象window
//直接打印
console.log(this) //window

//function声明函数
function bar () {console.log(this)}
bar() //window

//function声明函数赋给变量
var bar = function () {console.log(this)}
bar() //window

//自执行函数
(function () {console.log(this)})(); //window

// 2. 方法调用中谁调用this指向谁
//对象方法调用
var person = {
    run: function () {console.log(this)}
}
person.run() // person

//事件绑定
var btn = document.querySelector("button")
btn.onclick = function () {
    console.log(this) // btn
}
//事件监听
var btn = document.querySelector("button")
btn.addEventListener('click', function () {
   console.log(this) //btn
})

//jquery的ajax
 $.ajax({
    self: this,
    type:"get",
    url: url,
    async:true,
    success: function (res) {
        console.log(this) // this指向传入$.ajxa()中的对象
        console.log(self) // window
    }
   });
//这里说明以下，将代码简写为$.ajax（obj） ，this指向obj,在obj中this指向window，因为在在success方法中，独享obj调用自己，所以this指向obj
// 3. 在构造函数或者构造函数原型对象中this指向构造函数的实例
//不使用new指向window
function Person (name) {
    console.log(this) // window
    this.name = name;
}
Person('inwe')
//使用new
function Person (name) {
      this.name = name
      console.log(this) //people
      self = this
  }
  var people = new Person('iwen')
  console.log(self === people) //true
//这里new改变了this指向，将this由window指向Person的实例对象people

