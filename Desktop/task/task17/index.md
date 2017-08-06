题目1： 轮播的实现原理是怎样的？如果让你来实现，你会抽象出哪些函数(or接口)供使用？（比如 play()）
**轮播的实现原理：**将图片排成一行，隐藏超出范围的图片，并在第一张图片前添加最后一张图片，在最后一张图片后添加第一张图片，
当触发点击下一张图片的事件时，根据方向移动图片位置来滚动显示图片，滚动到最后一张图片或第一张图片时，
再次滚动要跳转到第一张的图片或最后一张图片的位置 


```

//实现一个play(index)函数 传入要显示的图片页数 
function play(index){ 
      if(PageIndex === index){ 
          return; 
      } 
      if(isAnimate) return; 
      isAnimate = true; 
      $imgCt.animate({
          left: '+=' + (PageIndex - index) *$firstImg.width() 
      }, function(){ 
          PageIndex = index; 
         if(PageIndex === imgLength){ 
               $imgCt.css({
                     left: - $firstImg.width() 
              }) 
        PageIndex = 0; 
        } 
        else if(PageIndex === -1){
            $imgCt.css({ left: - $firstImg.width() * imgLength }) 
            PageIndex = imgLength -1 ; 
        } 
         isAnimate = false; 
    }) 
}
```
