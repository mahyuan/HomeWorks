**问题1： OOP 指什么？有哪些特性**
OOP是Object Oriented Programming（面向对象程序设计）
特性：

1. 封装: 将客观的事物封装成抽象的类，类一般被指派代表一类具有共同属性的事物，也可能具有相应的一些功能，而这些功能的具体实现是不被暴露出来的，用户只能接触到一些”接口“，这些接口告知用户可以使用什么样的功能，却无法探知里面的内容。类似一个黑盒操作模型。封装后的类可以具有更灵活的组合使用方式以及高复用性，提高了开发的效率。

2 . 继承: 继承可以让某个类型的对象获得另一个类型的属性与方法，而不需要再次手动编写属于自己的同样的属性/方法。使用现有的类，我们可以对这些方法进行拓展。通过继承创建新的类称为子类或派生类，被继承的类称为基类，（父类，超类），继承的过程，是从一般到特殊的过程。实现继承我们可以通过继承和组合实现，继承概念的实现方式有两类，实现继承和接口继承，实现继承是直接使用父类的属性和方法，而无需额外的编码能力，接口继承仅仅继承了属性和方法的名称，但子类需要去对其提供实现的能力。

3 . 多态: 对于同一个类，在不同的状态下，可能会做出不同的反应，也就是说在内部结构里进行的操作不同，但是都通过相同的方式予以调用。

**问题2： 如何通过构造函数的方式创建一个拥有属性和方法的对象?**
```
function Person()(name,age,job){//定义构造函数，默认命名第一个字母为大写
    this.name=name;
    this.age=age;
    this.job=job;//直接将属性和方法赋给this对象
    this.sayName=function(){
        alert(this.name);
    };
}
var person1=new Person('jrg','22','doctor')//使用new操作符进行实例化
```
**问题3： prototype 是什么？有什么特性**
每创建一个函数都有一个prototype（原型）属性，这个属性是一个指针，指向一个对象，而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。所以也可以说prototype就是通过调用构造函数而创建的那个对象实例的原型对象，原型对象可以让所有对象实例共享它所包含的属性和方法
**问题4：画出如下代码的原型图**
```
function People (name){
    this.name = name;
    this.sayName = function(){
      console.log('my name is:' + this.name);
    }
}

People.prototype.walk = function(){
    console.log(this.name + ' is walking');
}

var p1 = new People('饥人谷');
var p2 = new People('前端');
```
![原型.png](http://upload-images.jianshu.io/upload_images/6719885-ad8159d0a2bf36d1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/690)

**问题5： 创建一个 Car 对象，拥有属性name、color、status；拥有方法run，stop，getStatus**

```
function Car(name,color,status){
     this.name = name ;
     this.color = color;
     this.status = status;
}
Car.prototype ={
     constructor:Car,
     run:function(){
         console.log(run)
     },
     stop:function(){
        console.log(stop)
    },
    getStatus:function(){
        console.log(this.status)
    }
}
var Car1 = new Car('dazhong', 'red', '0'){
    Car1.run();  // run
    Car1.stop();  //stop
    Car1.getStatus();   //0
}

```

**问题6： 创建一个 GoTop 对象，当 new 一个 GotTop 对象则会在页面上创建一个回到顶部的元素，点击页面滚动到顶部。**
拥有以下属性和方法
```
1. `ct`属性，GoTop 对应的 DOM 元素的容器
2.  `target`属性， GoTop 对应的 DOM 元素
3.  `bindEvent` 方法， 用于绑定事件
4 `createNode` 方法， 用于在容器内创建节点
```
[效果预览](https://mhy-web.github.io/HomeWorks/高级/task1/)，代码如下：
```
        function GoTop(ct, target){
            this.ct = ct
            this.target = $('<button class="btn">Go Top</button>')
            this.target.css({
                'bottom':'00px',
                'position':'fixed'
            })
        }
        GoTop.prototype = {
            constructor:GoTop,
            creatNode:function(){
                this.ct.append(this.target)
                this.target.hide()
            },
            bindEvent:function(){
                var _this = this
                $(window).on('scroll',function(){
                    if($(window).scrollTop() > 100){
                        _this.target.show()
                    }else{
                        _this.target.hide()
                    }
                })
                this.target.on('click',function(){
                    $(window).scrollTop(0)
                })
            }
        }
        var Top = new GoTop($('body'))
        Top.creatNode()
        Top.bindEvent()

```

#####问题7： 使用木桶布局实现一个图片墙

[代码](https://github.com/mhy-web/HomeWorks/tree/master/%E9%AB%98%E7%BA%A7/task1/Barrellayout/index.html/)

[预览](https://mhy-web.github.io//HomeWorks/高级/task1/Barrellayout/)