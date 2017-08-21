var images = [1,2,3,4,5].map(function(ele,index){
    return '<li class="image-item">'+
            '<img src="http://cdn.jirengu.com/book.jirengu.com/img/'+ele+'.jpg"/>'+
            '</li>'
        }).join('')
        $('.img-ct').html(images)
        console.log(images)

var Slider = function(container){
    this.pre = container.find('#pre')
    this.next = container.find('#next')
    this.imgWrapper = container.find('.img-ct')
    this.addEvent()
    //当前的叙述号
    this.currentIndex = 0
    this.imgLength = container.find('.image-item').length-1
    // debugger;
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
}
Slider.prototype.calculateIndex = function(isRight){
    if(isRight){
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
    // debugger;
    return this.currentIndex
}
Slider.prototype.slider = function(index){
    var  that = this
    this.animating = true
    this.imgWrapper.animate({
            'left': index * (-320) + 'px'
        },function(){
            // debugger;
            that.animating = false
    })
}
new Slider($('.img-wrapper').eq(0))
new Slider($('.img-wrapper').eq(1))