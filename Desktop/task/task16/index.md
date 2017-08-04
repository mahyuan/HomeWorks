######题目1：如何判断一个元素是否出现在窗口可视范围（浏览器的上边缘和下边缘之间，肉眼可视）。写一个函数 isVisible实现
```
 function isVisible($node){
     var scrollTop=$(window).scrollTop();
     var  windowHeight=$(window).height();
     var  offsetTop=$node.offset().top;
     var   nodeHeight = $node.outerHeight(true);
     if(offsetTop < scrollTop + windowHeight &&  offsetTop > scrollTop + nodeHeight){
         return true
     }else{
         return false
     }    
 }
```
######题目2：当窗口滚动时，判断一个元素是不是出现在窗口可视范围。每次出现都在控制台打印 true 。用代码实现
```
    $(window).on('scroll',function result(){
        if(isVisible($node)){
            console.log(true);
        }else{
            console.log(false);
        }
    })
    function isVisible($node){
        var windowHeight=$(window).height();
        var scrollTop=$(window).scrollTop();
        var offsetTop=$node.offset().Top;
        var nodeHeight=$node.outerHeight(true);
        if(windowHeight + scrollTop >offsetTop && scrollTop <offsetTop+ nodeHeight){
            return true;
        }else{
            return false;
        }
    }

```

######题目3：当窗口滚动时，判断一个元素是不是出现在窗口可视范围。在元素第一次出现时在控制台打印 true，以后再次出现不做任何处理。用代码实现
```
    function result(){
        if($('.img').not('.show').length===1 && isVisible($('.img'))){
            console.log(true);
            $('.img').addClass('show');
        }
        else if(!isVisible($('.img'))){
            console.log(false);
        }
    }
    $(window).on('scroll',result);
    function isVisible($node){
        var windowHeight=$(window).height(),
            scrollTop=$(window).scrollTop(),
            offsetTop=$node.offset().top,
            nodeHeight=$node.outerHeight(true);
        if(windowHeight + scrollTop > offsetTop && scrollTop +nodeHeight){
            return true;
        }
        else{
            return false;
        }
    }

```
######题目4： 图片懒加载的原理是什么？
**原理：**
图片懒加载就是将图片较多的页面进行图片条件延时加载，在图片加载前可以将图片设置为一个空白的图片或者加载中图片，在图片可视(offsetH < winH + scrollH)时将图片通过设置ajax 或者 data属性来加载图片，这样就能避免加载网页同时加载大量图片引起的页面卡顿情况。

######题目5： 实现视频中的图片懒加载效果
[task16-5](https://github.com/mhy-web/HomeWorks/tree/master/Desktop/task/task16/task16-5)
######题目6(选做)： 实现如下[ 新闻自动懒加载效果 ](http://47.91.156.35:3001/auto-news.html)（这里是[参考代码](http://js.jirengu.com/nihi/1/edit?html,js,output)


[我的demo]()