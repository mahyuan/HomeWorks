## 高级任务2（主线任务）：this_原型链_继承
###this 相关问题
####问题1： apply、call 、bind有什么作用，什么区别


`Function.prototype.bind`

bind，返回一个新函数，并且使函数内部的this为传入的第一个参数

var fn3 = obj1.fn.bind(obj1);
fn3();

使用call和apply设置this

call apply，调用一个函数，传入函数执行上下文及参数

fn.call(context, param1, param2...)

fn.apply(context, paramArray)

语法很简单，第一个参数都是希望设置的this对象，不同之处在于call方法接收参数列表，而apply接收参数数组

fn2.call(obj1);
fn2.apply(obj1);



####问题2： 以下代码输出什么?

var john = { 
  firstName: "John" 
}
function func() { 
  alert(this.firstName + ": hi!")
}
john.sayHi = func
john.sayHi()

###问题3： 下面代码输出什么，为什么

func() 
function func() { 
  alert(this)
}

####问题4：下面代码输出什么

document.addEventListener('click', function(e){
    console.log(this);
    setTimeout(function(){
        console.log(this);
    }, 200);
}, false);

####问题5：下面代码输出什么，why

var john = { 
  firstName: "John" 
}

function func() { 
  alert( this.firstName )
}
func.call(john)

####问题6： 以下代码有什么问题，如何修改

var module= {
  bind: function(){
    $btn.on('click', function(){
      console.log(this) //this指什么
      this.showMsg();
    })
  },
  
  showMsg: function(){
    console.log('饥人谷');
  }
}

##原型链相关问题

####问题7：有如下代码，解释Person、 prototype、__proto__、p、constructor之间的关联。

function Person(name){
    this.name = name;
}
Person.prototype.sayName = function(){
    console.log('My name is :' + this.name);
}
var p = new Person("若愚")
p.sayName();

####问题8： 上例中，对对象 p可以这样调用 p.toString()。toString是哪里来的? 画出原型图?并解释什么是原型链。

####问题9：对String做扩展，实现如下方式获取字符串中频率最高的字符

var str = 'ahbbccdeddddfg';
var ch = str.getMostOften();
console.log(ch); //d , 因为d 出现了5次

####问题10： instanceOf有什么作用？内部逻辑是如何实现的？
继承相关问题

####问题11：继承有什么作用?

####问题12： 下面两种写法有什么区别?

//方法1
function People(name, sex){
    this.name = name;
    this.sex = sex;
    this.printName = function(){
        console.log(this.name);
    }
}
var p1 = new People('饥人谷', 2)

//方法2
function Person(name, sex){
    this.name = name;
    this.sex = sex;
}

Person.prototype.printName = function(){
    console.log(this.name);
}
var p1 = new Person('若愚', 27);

####问题13： Object.create 有什么作用？兼容性如何？

####问题14： hasOwnProperty有什么作用？ 如何使用？

####问题15：如下代码中call的作用是什么?

function Person(name, sex){
    this.name = name;
    this.sex = sex;
}
function Male(name, sex, age){
    Person.call(this, name, sex);    //这里的 call 有什么作用
    this.age = age;
}

####问题16： 补全代码，实现继承

function Person(name, sex){
    // todo ...
}

Person.prototype.getName = function(){
    // todo ...
};    

function Male(name, sex, age){
   //todo ...
}

//todo ...
Male.prototype.getAge = function(){
    //todo ...
};

var ruoyu = new Male('若愚', '男', 27);
ruoyu.printName();