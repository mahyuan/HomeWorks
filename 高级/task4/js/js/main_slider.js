var images = [1,2,3,4,5].map(function(ele,index){
    return '<li class="image-item">'+
            '<img src="./images/'+ele+'.jpg"/>'+
            '</li>'
        }).join('')
        $('.img-ct').html(images)
        console.log(images)

var Slider = function(container){
    this.pre = container.find('#pre')
    this.next = container.find('#next')
    this.imgCt = container.find('.img-ct')
    this.curPageIndex = 0
    this.imgLength = container.find(image-item).length+1
    this.bind()
}
Slider.prototype.bind = function(){
    var that = this
    this.pre.on('click',function(e){
        e.preventDefault()
        that.playPre(1)
    }
    this.next.on('click',function(e){
        e.preventDefault()
        that.playNext(1)
    }) 
    
}
Slider.prototype.playPre = function(){
    var that = this
    this.curPageIndex -= len
    if(this.curPageIndex < 0){
        that.curPageIndex = that.imgLength -1
    }
    this.slider(index)
}
Slider.prototype.plyNext = function(len){
    var that = this
    this.curPageIndex +=len
    if(this.curPageIndex == this.imgLenth){
        that.cuePageIndex = 0
    }
}

Slider.prototype.slider = function(index){
    var that = this 
    this.isAnimating = true
    this.imgCt.animate({
        'left': index*(-1920) + 'px'
    },function(){
        that.isAnimating = false
    })
    this.setBullet(index)
}
Slider.prototype.setBullet = function(){

}
new Slider()


/*
var images = [1,2,3,4,5].map(function(ele,index){
    return '<li class="image-item">'+
            '<img src="./images/'+ele+'.jpg"/>'+
            '</li>'
        }).join('')
        $('.img-ct').html(images)
        console.log(images)

var Slider = function(container){
    this.pre = container.find('#pre')
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

Slider.prototype.calculateIndex = function(isRight,len){
    if(!isRight){
        this.currentIndex+=len
    }else{
        this.currentIndex-=len
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