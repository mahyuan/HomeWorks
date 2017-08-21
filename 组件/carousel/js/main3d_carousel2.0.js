
var Slider = function (container){
    this.imgContent = container.find('.carousel')
    this.pre = container.find('#pre')
    this.next = container.find('#next')
    this.currentIndex = 0
    this.bind()
    // this.continuous()
}
Slider.prototype.bind = function(){
    var that = this
    this.pre.on('click', function(){
        if(that.animating) return;
        var index = that.calculateIndex(true)
        that.slider(index)        
    })
    this.next.on('click', function(){
        if(that.animating) return;
        var index = that.calculateIndex(false)
        that.slider(index)          
    })
}

Slider.prototype.calculateIndex = function(isRight){

    if(isRight){
        this.currentIndex++
    }else{
         this.currentIndex --
    }
    console.log(this.currentIndex)
    return this.currentIndex;
}

Slider.prototype.slider = function(index){
    var that = this 
    if(this.animating) return;
    this.animating = true
    this.imgContent.css({
            'transform':'translateZ(-724px) rotateY('+ index*45 +'deg) rotateX(0deg)'
    },function () {  
        this.animating = false
        console.log('ggg0')
       }
)  
}
Slider.prototype.continuous = function() {
    var that = this
    var int = setInterval(function(){
        var index = that.calculateIndex(true)
        that.slider(index) 
    }, 3000)
}

new Slider($('.container'))