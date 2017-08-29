var images = [1,2,3,4,5].map(function(ele,index){
    return '<li class="image-item">'+
            '<img src="./images/'+ele+'.jpg"/>'+
            '</li>'
        }).join('');
    $('.img-ct').html(images)
    console.log(images)

var Slider = function(container){
    var $pre = container.find('#pre')
    var $next = container.find('#next')
    var $imgCt = container.find('.img-ct')
    var $bulletLi = container.find('.bullet').find('li')

    var $firstImg = $imgCt.find('.image-item').first()
    var $lastImg = $imgCt.find('image-item').last()

    var $itemWidth = $imgCt.find('image-item').width()

    this.curPageIndex = 0
    this.imgLength = $imgCt.find('.image-item').length
    this.isAnimating = false

    $imgCt.width($itemWidth*(this.imgLength +2) )

    $imgCt.prepend($lastImg.clone())
    $imgCt.append($firstImg.clone())
    $imgCt.css({
        'left': '-$itemWidth'
    })
    this.addEvent()
    this.timer()
}

Slider.prototype.addEvent = function(){
    var that = this
    this.$pre.on('click',function(){
        if(that.animating){
            return;
        }
        var index = that.calculateIndex(true)
        // debugger;
        that.slider(index)
    })
    this.$next.on('click',function(){
        if(that.animating){
            return;
        }
        var index = that.calculateIndex(false)
        that.slider(index)
    })
    
    this.$bulletLi.click(function(e){
        var index=$(this).index();
        e.preventDefault();
        if(index > that.currentIndex){
            that.playNext(index - that.currentIndex)
        }else if( index < that.currentIndex ){
            that.playPre(that.currentIndex - index);
        }
        that.slider(that.currentIndex)
    })
}
Slider.prototype.calculateIndex = function(isRight){
    if(!isRight){
        this.currentIndex++
    }else{
        this.currentIndex--
    }
    if(this.currentIndex == -1){
        this.currentIndex = this.imgLength
    }
    if(this.currentIndex == this.imgLength){
        this.currentIndex = 0
    }
    return this.currentIndex
}
Slider.prototype.slider = function(index){
    var that = this 
    if(this.isAnimating) return;
    this.isAnimating = true
    this.$imgCt.animate({
        'left': index*(-this.itemWidth) + 'px'
    },function(){
        that.isAnimating = false
    })   
    this.setBullet(index)
}

Slider.prototype.setBullet = function(){
    this.$bullet.children()
        .removeClass('.active')
        .eq(this.curPageIndex)
        .addClass('active')
}
Slider.prototype.timer = function(){
    var that = this 
    var timerId = setInterval(function(){
        that.playNext(1)
    },3000)
}

new Slider($('.img-wrapper'))


/*
Slider.prototype.bind = function(){
    var that = this
    // debugger
    this.$pre.click(function(e){
        e.preventDefault()
        that.playPre(1)
    })
    this.$next.click(function(e){
        e.preventDefault()
        that.playNext(1)
    }) 
    this.$bulletLi.click(function(e){
        e.preventDefault()
        that.slider(index)
    })  
}

Slider.prototype.playPre = function(len){
    var that = this
    if(isAnimating) return;
    this.isAnimating = true
    this.$imgCt.animate({
        'left': '-=' + len*$itemWidth
    },function(){
        that.curPageIndex -= len
        if(that.curPageIndex < 0){
            that.curPageIndex = that.imgLength - 1
            $imgCt.css({
                'left' : '-$itemWidth*that.imgLength'
            })
        }
    })
    this.isAnimating = false
    this.setBullet()
}
Slider.prototype.plyNext = function(len){
    var that = this
    if(this.isAnimating) return;
    this.isAnimating = true
    this.$imgCt.animate({
        'left': '-=' + len*$itemWidth
    },function(){
        this.curPageIndex += len
        if(that.curPageIndex === that.imgLenth){
            that.curPageIndex = 0
            that.$imgCt.css({
                'left': '-index*$itemWidth'
            })
        }
    })

    this.isAnimating = false
    this.setBullet()
}
*/


/*
var images = [1,2,3,4,5].map(function(ele,index){
    return '<li class="image-item">'+
            '<img src="./images/'+ele+'.jpg"/>'+
            '</li>'
        }).join('')
        $('.img-ct').html(images)
        console.log(images)

var Slider = function(container$ = container.find('#pre')
    this.next = container.find('#next')
    this.imgWrapper = container.find('.img-ct')
    // this.bulletCt = container.find('.bullet')
    this.bulletLi = container.find('.bullet li')
    this.addEvent()
    //当前的叙述号
    this.currentIndex = 0
    this.imgLength = container.find('.image-item').length-1
}
Slider.prototype.addEvent = function(){
    var that = this
    this.pre.on('click',function(){
        if(that.animating){
            return;
        }
        var index = that.calculateIndex(true)
        // debugger;
        that.slider(index)
    })
    this.next.on('click',function(){
        if(that.animating){
            return;
        }
        var index = that.calculateIndex(false)
        that.slider(index)
    })
    
    this.bulletLi.click(function(e){
        var index=$(this).index();
        e.preventDefault();
        console.log('bulletLi index:'+index);
        if(index > that.currentIndex){
            that.playNext(index - that.currentIndex)
        }else if( index < that.currentIndex ){
            that.playPre(that.currentIndex - index);
        }
        that.slider(that.currentIndex)
    })
    
}

Slider.prototype.calculateIndex = function(isRight){
    if(!isRight){
        this.currentIndex++
    }else{
        this.currentIndex--
    }
    if(this.currentIndex == -1){
        this.currentIndex = this.imgLength
    }
    if(this.currentIndex > this.imgLength){
        this.currentIndex = 0
    }
    return this.currentIndex
}
Slider.prototype.slider = function(index){
    var  that = this
    this.animating = true
    this.imgWrapper.animate({
            'left': index * (-1980) + 'px'
        },function(){
            // debugger;
            that.animating = false
    })
    this.setBullet(index)
}
Slider.prototype.setBullet = function(){
    this.bulletLi
        .removeClass('active')
        .eq(this.currentIndex)
        .addClass('active')
}
new Slider($('.img-wrapper').eq(0))
*/