题目1： HTML5是什么？有哪些新特性？有哪些新增标签？如何让低版本的 IE 支持 HTML5新标签

HTML5是超文本标记语言的第五次重大修改，2014年10月29日标准规范制定完成

html5新增了很对标签，常用的有 header, footer, nav, aside, artical, section, figure, canvas, audio, video, progress...

如何让低版本的IE浏览器支持Html5新标签呢？最方便的方法是：

让IE（ie6/ie7/ie8）支持HTML5元素，我们需要在HTML头部添加以下JavaScript，这是一个简单的document.createElement声明，利用条件注释针对IE来调用这个js文件。Opera，FireFox等其他非IE浏览器就会忽视这段代码，也不会存在http请求。
需要注意的是，不管你用上面哪中方式，请记得在CSS中进行如下定义，目的是让这些标签成为块状元素，just like div。
article,aside,dialog,footer,header,section,footer,nav,figure,menu{display:block}

题目2： input 有哪些新增类型？

input新增了很多type：
email, url, number, range, Date Picker(date, mouth, week, time, datetime)

题目3： 浏览器本地存储中 cookie 和 localStorage 有什么区别？ localStorage 如何存储删除数据。

>- cookie在浏览器请求中每次都会附加请求头中发送给服务器。大小不能超过4k
>- localStorage保存数据会一直保存没有过期时间，不会随浏览器发送给服务器。大小5M或更大
>- sessionStorage仅当前页面有效一旦关闭就会被释放。也不会随浏览器发送给服务器。大小5M或更大

题目4： 写出如下 CSS3效果的简单事例
```
    1. 圆角， 圆形
    2. div 阴影
    3. 2D 转换：放大、缩小、偏移、旋转
    4. 3D 转换：移动、旋转
    5. 背景色渐变
    6. 过渡效果
    7. 动画
```

题目5： 实现如下全屏图加过渡色的效果（具体效果随意）DEMO176



题目6： 写出如下 loading 动画效果 DEMO1185 DEMO2173