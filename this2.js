// https://blog.csdn.net/hellochenlu/article/details/52244276
// example 1:
function say(content) {
    console.log("From " + this + ": Hello "+ content);
}
say.call("Bob", "World"); //==> From Bob: Hello World
// 我们通过call方法，让say函数执行时的this指向"Bob"，然后把"World"作为参数传进去

// example 2:
function say(word) {
    console.log(world);
}
say("Hello world");

say.call(window, "Hello world");
// 以上可以把say("Hello world")看做是say.call(window,"Hello world")的语法糖
// 所以以后每次看见functionName(xxx)的时候，你需要马上在脑海中把它替换为functionName.call(window,xxxx)
// 不过也有例外，在ES5的strict mode中call的第一个参数不是window而是undefined

// ***** 函数作为对象的方法被调用
// example 3:
var person = {
    name : "caibirdme",
    run : function(time) {
        console.log(this.name + "has been running for over "+ time+ " minutes");
    }
};
person.run(30); //==> caibirdme has been running for over 30 minutes
//等价于
person.run.call(person, 30); // the same

// example 4:
function hello(thing) {
    console.log(this + " says hello " + thing);
  }

  person = { name: "caibirdme" }
  person.hello = hello;

  person.hello("world") // 相当于执行 person.hello.call(person, "world")
  //caibirdme says hello world

  hello("world") // 相当于执行 hello.call(window, "world")
  //[object DOMWindow]world

// example 5:
var obj = {
    x: 20,
    f: function(){ console.log(this.x); }
};

obj.f(); // obj.f.call(obj)
//==> 20

obj.innerobj = {
    x: 30,
    f: function(){ console.log(this.x); }
}

obj.innerobj.f(); // obj.innerobj.f.call(obj.innerobj)
// ==> 30


// example 6:
var x = 10;
var obj = {
    x: 20,
    f: function(){
        console.log(this.x); //this equals obj
                // ==> 20
        var foo = function(){ console.log(this.x); }
        foo(); // foo.call(window)
                //foo中this被指定为window，所以==> 10
    }
};

obj.f();  // obj.f.call(obj)
// ==> 20 10
// 由例三引出一个非常common的问题，如果我想让foo输出20怎么办？这时候需要用到一点小技巧
var x = 10;
var obj = {
    x: 20,
    f: function(){
        console.log(this.x);
        var that = this; //使用that保留当前函数执行上下文的this
        var foo = function(){ console.log(that.x); } //此时foo函数中的this仍然指向window，但我们使用that取得obj
        foo(); // foo.call(window)
    }
};

obj.f(); obj.f.call(obj)
// ==> 20 20

// 再来一个稍微难一点点的(但其实用call替换法一点儿也不难)
var x = 10;
var obj = {
    x: 20,
    f: function(){ console.log(this.x); }
};

obj.f(); // obj.f.call(obj)
// ==> 20

var fOut = obj.f;
fOut(); // fOut.call(window)
//==> 10

var obj2 = {
    x: 30,
    f: obj.f
}

obj2.f(); // obj2.f.call(obj2)
//==> 30

// 用于构造函数
function person(name) {
    this.name = name;
}
var caibirdme = new person("deen");
// caibirdme.name == deen

//函数在用作构造函数时同样可以用call方法去代替，那这里怎么代替呢？
// 这里你又需要明确一点：
// new constrcut()是一种创建对象的语法糖
function person(name) {
    this.name = name;
 }
 var foo = new person("deen");
 //通过new创建了一个对象
 //new是一种语法糖，new person等价于
 var bar = (function(name) {
     var _newObj = {
         constructor : person,
         __proto__ : person.prototype,
     };
     _newObj.constructor(name); // _newObj.constructor.call(_newObj, name)
     return _newObj;
 })();

 // !!! 总结： 总结来说就是下面两个等价变形：

    // foo() ---> foo.call(window)
    // obj.foo() --> obj.foo.call(obj)
