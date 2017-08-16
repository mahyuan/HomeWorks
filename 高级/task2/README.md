# 高级任务2（主线任务）：this_原型链_继承
##this 相关问题
###问题1： apply、call 、bind有什么作用，什么区别


* Function.prototype.bind:

 bind，返回一个新函数，并且使函数内部的this为传入的第一个参数
```
var fn3 = obj1.fn.bind(obj1);
fn3();
```
* 使用call和apply设置this

 call apply，调用一个函数，传入函数执行上下文及参数
```
fn.call(context, param1, param2...)
fn.apply(context, paramArray)
```

 语法很简单，第一个参数都是希望设置的this对象，不同之处在于call方法接收参数列表，而apply接收参数数组
```
fn2.call(obj1);
fn2.apply(obj1);
```
* 它们的不同之处：

 * apply：

     最多只能有两个参数——新this对象和一个数组 argArray。如果给该方法传递多个参数，则把参数都写进这个数组里面，当然，即使只有一个参数，也要写进数组里面。如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj，并且无法被传递任何参数。
 * call：

     则是直接的参数列表，主要用在js对象各方法互相调用的时候，使当前this实例指针保持一致,或在特殊情况下需要改变this指针。如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。

 更简单地说，apply和call功能一样，只是传入的参数列表形式不同：如 func.call(func1,var1,var2,var3) 对应的apply写法为：func.apply(func1,[var1,var2,var3])
也就是说：call调用的为单个，apply调用的参数为数组
```
function sum(a,b){
  console.log(this === window);//true
  console.log(a + b);
}
sum(1,2);
sum.call(null,1,2);
sum.apply(null,[1,2]);
```
作用　　

    * 调用函数
```
var info = 'tom';
function foo(){   
  //this指向window 
  var info = 'jerry';
  console.log(this.info);   //tom
  console.log(this===window)  //true
}
foo(); 
foo.call();
foo.apply();
call和apply可以改变函数中this的指向　　
var obj = {
      info:'spike'
}
foo.call(obj);    //这里foo函数里面的this就指向了obj
foo.apply(obj);
```
    * 借用别的对象的方法
    
    eg:求数组中的最大值
```
var arr = [123,34,5,23,3434,23];
//方法一
var arr1 = arr.sort(function(a,b){
  return b-a;
});
console.log(arr1[0]);
//方法二
var max = Math.max.apply(null,arr)   //借用别的对象的方法
console.log(max);
fn.call(context, param1, param2...)
fn.apply(context, paramArray)
```

###问题2： 以下代码输出什么?
    
```
    var john = { 
        firstName: "John" 
    }
    function func() { 
        alert(this.firstName + ": hi!")
    }
    john.sayHi = func
    john.sayHi()
    //输出结果：join：hi！
    //此时，this是join对象；
```


###问题3： 下面代码输出什么，为什么
```
    func() 
    function func() { 
       alert(this)
    }
    //输出： Window
    //原因：func()等价于func.call(undefined); 
    //而undefined会被浏览器默认为全局对象window;
```
####问题4：下面代码输出什么
```
    document.addEventListener('click', function(e){
        console.log(this);
        setTimeout(function(){
            console.log(this);
        }, 200);
    }, false);
    //输出为：#document;  window;
    //在事件处理程序中this代表事件源DOM对象
    //(setTimeout、setInterval这两个方法执行的函数this也是全局对象)
    
```
####问题5：下面代码输出什么，why
```
    var john = { 
        firstName: "John" 
    }
    function func() { 
        alert( this.firstName )
    }
    func.call(john)
    //输出： john
    //解释：call（）中第一个参数表示定义的this值，即func（）中的this代表join。
```
####问题6： 以下代码有什么问题，如何修改

```
    var module= {
        bind: function(){
            $btn.on('click', function(){
                console.log(this) //this指？
                this.showMsg();
            })
        },
        showMsg: function(){
            console.log('饥人谷');
        }
    }
    //this指什么$btn
```
修改后
```
    var module= {
        bind: function(){
            var _this = this;
            $btn.on('click', function(){
                console.log(_this) //_this指的是module；
                _this.showMsg();//饥人谷
            })
        },
        showMsg: function(){
            console.log('饥人谷');
        }
    }
    //this指什么$btn
```
##原型链相关问题

####问题7：有如下代码，解释Person、 prototype、__proto__、p、constructor之间的关联。
```
    function Person(name){
        this.name = name;
    }
    Person.prototype.sayName = function(){
        console.log('My name is :' + this.name);
    }
    var p = new Person("若愚")
    p.sayName();
```


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