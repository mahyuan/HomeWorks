######题目1： jQuery 能做什么？

- 封装部分JavaScript代码，API友好。
        $(“css选择器”) 代替了 document.getElementsByTagName(“”)、document.getElementById(“”)…
        $(“css选择器”).css(“color”,”red”) 代替了 document.getElementById(“”).style.color = “red”。
        $(“css选择器”).text(“”) 一个api同时具有读跟写的功能。($(“div”).text(“你好吗”);)。
        $(“css选择器”).on(“click”,function (){}),监听事件。
- 将原生DOM元素的功能实现并且满足良好的兼容性，最重要的是，可以简化代码。
- jquery是一个丰富的js库，内部对js的很多复杂的方法进行了封装和加工，比如js很多方法名很冗长，jquery封装后方法就变得简便了，也考虑到了跨浏览器兼容问题，这样我们用js时需要考虑的很多问题它都帮我们解决了，这样我们使用时就比js代码要方便，高效的多。

######题目2： jQuery 对象和 DOM 原生对象有什么区别？如何转化？

- DOM原生对象：

    - 是对象；
    - 拥有原生对象的属性和方法；

- jQuery对象：

    - 是DOM元升级对象经过包装之后，拥有jQuery的属性和方法（对原生DOM对象的封装）；
    - 是类数组；

- DOM原生对象转化为jQuery对象：
`$div = $(document.getElementsByTagName(‘div’));`
- jQuery对象转化为DOM原生对象：
`div = $div[index];`

对于一个特定结果集，我们想获取到指定index的jQuery对象，可以使用eq方法

`$('div').eq(3); `// 获取结果集中的第四个jQuery对象

我们可以通过类数组下标的获取方式或者get方法获取指定index的DOM对象，也就是我们说的jQuery对象转DOM对象

`$('div')[2];`
`$('div').eq(2);`


![转换为原生DOM.png](http://upload-images.jianshu.io/upload_images/6719885-6ae1b96265c06b14.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)  ![原生DOM转换为jQuery对象](http://upload-images.jianshu.io/upload_images/3706166-779751cadc9abb1b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

######题目3：jQuery中如何绑定事件？bind、unbind、delegate、live、on、off都有什么作用？推荐使用哪种？使用on绑定事件使用事件代理的写法？
```
$("#nav").on("click",function(){
    console.log("hello")
});
```
- .bind()为一个元素绑定一个事件处理程序。
- .unbind():bind的反向操作，从每一个匹配的元素中删除绑定的事件。如果没有参数，则删除所有绑定的事件，.unbind(type)删除指定类型事件；
```
$( "#foo" ).unbind(); 
$( "#foo").unbind( "click" );
```
.live()
```
$('a').live('click',function(){
  alert('harrisking')
});
```
JQuery把alert函数绑定到$(document)元素上，并使用’click’和’a’作为参数。任何时候只要有事件冒泡到document节点上，它就查看该事件是否是一个click事件，以及该事件的目标元素与’a’这一CSS选择器是否匹配，如果都是的话，则执行函数。

.delegate()
```
    $('#container').delegate('a', 'click', function() {
    alert("That tickles!")
    });
```
JQuery扫描文档查找$(‘#container’)，并使用click事件和’a’这一CSS选择器作为参数把alert函数绑定到$(‘#container’)上。任何时候只要有事件冒泡到$(‘#container’)上，它就查看该事件是否是click事件，以及该事件的目标元素是否与CCS选择器相匹配。如果两种检查的结果都为真的话，它就执行函数。

为什么.delegate()要比.live()好用?
```
$('a').live('click', function() { 
blah()
});
// 或者
$(document).delegate('a', 'click', function() {
blah() 
});
```
后者实际上要快过前者，因为前者首先要扫描整个的文档查找所有的$(‘a’)元素，把它们存成jQuery对象。

 .on()
```
// Bind

$( "#members li a" ).on( "click", function( e ) {
} ); 
$( "#members li a" ).bind( "click", function( e ) {
} );

 // Delegate

$( "#members" ).on( "click", "li a", function( e ) {
} ); 
//注意子元素参数位置$( "#members" ).delegate( "li a", "click", function( e ) {
} );
```
.off()

off()：移除用on()绑定的事件处理程序

从所有的p中移除所有的事件:

`$( "p" ).off();`

从所有的p中移除click的事件:

`$( "p" ).off( "click", "**" );`

将事先绑定的方法作为第三个参数传参来移除绑定事件:

```var foo = function() {

// Code to handle some kind of event

};

// ... Now foo will be called when paragraphs are clicked ...

$( "body" ).on( "click", "p", foo );

// ... Foo will no longer be called.

$( "body" ).off( "click", "p", foo );
```

通过命名空间移除绑定函数:
```
var validate = function() {

// Code to validate form entries

};

// Delegate events under the ".validator" namespace

$( "form" ).on( "click.validator", "button", validate );

$( "form" ).on( "keypress.validator", "input[type='text']", validate );

// Remove event handlers in the ".validator" namespace

$( "form" ).off( ".validator" );
```

live方法被废弃on事件绑定把上面三种方法统一了，用起来更方便。
######题目4：jQuery 如何展示/隐藏元素？

![图片.png](http://upload-images.jianshu.io/upload_images/6719885-a7afccfcc99bbd4c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
  <div class='box'>
    <button class="btn1">消失</button>
    <button class="btn2">出现</button>
    <button class="btn3">切换</button>    
  </div>
  <div class='content'>content</div>
  <script>
    $('.btn1').on('click',function(){
      $('.content').hide('5000')
    })
    $('.btn2').on('click',function(){
      $('.content').show('2000')
    })
    $('.btn3').on('click',function(){
      $('.content').toggle('2000')
    })   
  </script>
```
######题目5： jQuery 动画如何使用？
[demo1]()
######题目6：如何设置和获取元素内部 HTML 内容？如何设置和获取元素内部文本？
(1) 设置和获取元素内部 HTML 内容：

**html([string])**
这是一个读写两用的方法，用于获取/修改元素的innerHTML
 -  当没有传递参数的时候，返回元素的innerHTML
 - 当传递了一个string参数的时候，修改元素的innerHTML为参数值
```
$('div').html()
$('div').html('123')
```
(2) 设置和获取元素内部文本：
**text()**
和html方法类似，操作的是DOM的innerText值
```
$('#test').text(); 
$('#test').text(这是要更改的内容);
```
######题目7：如何设置和获取表单用户输入或者选择的内容？如何设置和获取元素属性？
```
$(‘selector’).val();//获取表单用户输入值;
$(‘selector’).val(‘…’);//设置输入值;
$(‘selector’).attr(‘name’)//获取元素属性;
$(‘selector’).attr(‘name’,’xxx’)//设置元素属性的值;
```
######题目8： 使用 jQuery实现如下效果
![](http://upload-images.jianshu.io/upload_images/6719885-699acf7c366a8c77.gif?imageMogr2/auto-orient/strip)


题目9：. 使用 jQuery 实现如下效果
![8-2.gif840x607 615 KB](http://jscode.me/uploads/default/optimized/1X/40ce161fccb9c958ce39bc6caf6b142eec3a1fe8_1_690x498.gif)
[demo2]()

题目10：实现如下效果
![8-3-1.gif950x615 630 KB](http://upload-images.jianshu.io/upload_images/6719885-7c5ee6e9b8fed7b3.gif?imageMogr2/auto-orient/strip)
[demo2]()

Ps:当点击按钮时使用如下数据

```
var products = [
	{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手 猴哥款',
		price: '￥405.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金转运珠 猴哥款',
		price: '￥100.00'
	},{
		img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
		name: '珂兰 黄金手链 3D猴哥款',
		price: '￥45.00'
	}
];
```
题目11： 模仿视频6，完成 左右切换的 Tab 效果

[demo3]()