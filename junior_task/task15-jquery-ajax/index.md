######题目1： jQuery 中， $(document).ready()是什么意思？
当DOM准备就绪时，指定一个函数来执行。
虽然JavaScript提供了**load事件**，当页面呈现时用来执行这个事件，直到所有的东西，如图像已被完全接收前，此事件不会被触发。
在大多数情况下，只要DOM结构已完全加载时，脚本就可以运行。传递处理函数给**.ready()**方法，能保证DOM准备好后就执行这个函数，因此，这里是进行所有其它事件绑定及运行其它 jQuery 代码的最佳地方。
如果**执行的代码需要在元素被加载之后才能使用**时，（例如，取得图片的大小需要在图片被加载完后才能知道），就需要将这样的代码放到 load 事件中。

下面两种语法全部是等价的：

    $(document).ready(handler)
    $(handler)

我们经常这么使用
```
 $(function(){
     console.log('ready');
 });
```
######题目2： $node.html()和$node.text()的区别?
```
html([string])
```

这是一个读写两用的方法，用于获取/修改元素的innerHTML

- 当没有传递参数的时候，返回元素的innerHTML
- 当传递了一个string参数的时候，修改元素的innerHTML为参数值

看个例子
```
$('div').html()
$('div').html('123')
```
后续这种读写两用的方法很多，原理都类似

- 如果结果是多个进行赋值操作的时候会给每个结果都赋值
- 如果结果多个，获取值的时候，返回结果集中的第一个对象的相应值
```
text()
```
和html方法类似，操作的是DOM的innerText值

######题目3： $.extend 的作用和用法?
```
jQuery.extend([deep,] target [, object1 ] [, objectN ] )
```
- 当我们提供两个或多个对象给$.extend()，对象的所有属性都添加到目标对象（target参数）。
- 如果只有一个参数提供给$.extend()，这意味着目标参数被省略。在这种情况下，jQuery对象本身被默认为目标对象。这样，我们可以在jQuery的命名空间下添加新的功能。这对于插件开发者希望向 jQuery 中添加新函数时是很有用的

- 如果想保留原对象，我们可以通过传递一个空对象作为目标对象：
```
var object = $.extend({}, object1, object2);
```
- 在默认情况下，通过$.extend()合并操作不是递归的;
- deep：默认false，如果为true，合并成为递归（又叫做深拷贝）

如果第一个对象的属性本身是一个对象或数组，那么它将完全用第二个对象相同的key重写一个属性。这些值不会被合并。如果将 true作为该函数的第一个参数，那么会在对象上进行递归的合并。
```
var object1 = {
  apple: 0,
  banana: { weight: 52, price: 100 },
  cherry: 97
};
var object2 = {
  banana: { price: 200 },
  durian: 100
};

// Merge object2 into object1
$.extend( object1, object2 );
```
######题目4： jQuery 的链式调用是什么？
- jQuery链式调用：在对象上一次性调动多个方法
```
    $(this).addClass("active").siblings().removeClass("active")
```
- 因为大部分对象方法的最后是return this，所以有了链式调用，简易代码。

######题目5： jQuery 中 data 函数的作用
- 作用：data方法允许在DOM元素上绑定任意类型的数据，避免了循环引用的内存泄漏风险。
- 语法：
```
   $(“selector”).data(key, value)。
```
######题目6：
```
写出以下功能对应的 jQuery 方法：
   1. 给元素 $node 添加 class active，给元素 $noed 删除 class active
       $node.addClass('active');
       $node.removeClass('active')  

   2. 展示元素$node, 隐藏元素$node
      $node.show();
      $node.hide();         
   
   3. 获取元素$node 的 属性: id、src、title， 修改以上属性
      $node.attr('id');//获取id
      $node.attr('id','nav');//修改id
      $node.attr('src');//获取src
      $node.attr('src','./wed.png');//修改src
      $node.attr('title');//获取title
      $node.attr('title','picture');//修改title    
               
   4. 给$node 添加自定义属性data-src
      $node.attr('data-src', ' ');

   5. 在$ct 内部最开头添加元素$node
       $ct.prepend('$node')

   6.  在$ct 内部最末尾添加元素$node
       $ct.append('$node')

   7.  删除$node
       $node.remove()

   8.  把$ct里内容清空
       $ct.empty()

   9.  在$ct 里设置 html <div class="btn"></div>
       $ct.html('<div class="btn"></div>')

   10. 获取、设置$node 的宽度、高度(分别不包括内边距、包括内边距、包括边框、包括外边距)
       //无参数获取宽度、高度，有参数设置宽度、高度
       $ct.width();                // width
       $ct.height();               // height
       $ct.innerWidth();       // width+ padding
       $ct.innerHeight();      // height+ padding
       $ct.outerWidth();        // width+ padding + border
       $ct.outerHeight();       // height + padding + border
       $ct.outWidth(true);     // width ＋ padding + border + margin
       $ct.outHeight(true);    // height + padding + border + margin

   11.  获取窗口滚动条垂直滚动距离
       $(window).scrollTop();

   12.  获取$node 到根节点水平、垂直偏移距离
       $node.offset();

   13.  修改$node 的样式，字体颜色设置红色，字体大小设置14px
       $node.css({'color':'red','font-size':'14px'});

   14. 遍历节点，把每个节点里面的文本内容重复一遍
       $.each(function(){
            console.log($(this).text());
       })

   15. 从$ct 里查找 class 为 .item的子元素
        $ct.find('.item');

   16. 获取$ct 里面的所有孩子
        $ct.children();

   17.  对于$node，向上找到 class 为'.ct'的父亲，在从该父亲找到'.panel'的孩子
        $node.parents('.ct').find('.pandl');

   18.  获取选择元素的数量
        $node.length;

   19. 获取当前元素在兄弟中的排行
        $(this).index();

```
######题目7：用jQuery实现以下操作
1. 当点击$btn 时，让 $btn 的背景色变为红色再变为蓝色
2. 当窗口滚动时，获取垂直滚动距离
3. 当鼠标放置到$div 上，把$div 背景色改为红色，移出鼠标背景色变为白色
4. 当鼠标激活 input 输入框时让输入框边框变为蓝色，当输入框内容改变时把输入框里的文字小写变为大写，当输入框失去焦点时去掉边框蓝色，控制台展示输入框里的文字
4. 当选择 select 后，获取用户选择的内容
[task15-7](http://js.jirengu.com/fatey)
######题目8： 用 jQuery ajax 实现如下效果。`当点击加载更多会加载数据展示到页面
[效果预览](http://jrgzuoye.applinzi.com/%E4%BD%9C%E4%B8%9A%E5%AE%89%E6%8E%92/jscode/JS9-jqueryajax/1.html)

[demo](https://github.com/mhy-web/HomeWorks/blob/master/Desktop/task/task15/task15-8/index15-8.html)