
var Slider = function (container){
    this.imgContent = container.find('.carousel')
    this.pre = container.find('#pre')
    this.next = container.find('#next')
    this.currentIndex = 0
    // this.isMoving=false
	// this.int = 0
    this.bind()
 
    this.continuous()
}
Slider.prototype.bind = function(){
    var that = this
    this.pre.on('click', function(){
        this.clearInterval(continuous)
        if(that.animating) return;
        // if(that.isMoving) return;
        var index = that.calculateIndex(true)
        that.slider(index)
        
    })
    this.next.on('click', function(){
        if(that.animating) return;
        // if(that.isMoving) return
        var index = that.calculateIndex(false)
        that.slider(index) 
    })
    // this.isMoving = false
}

Slider.prototype.calculateIndex = function(isRight){

    if(isRight){
        this.currentIndex++
    }else{
         this.currentIndex--
    }
    
    console.log(this.currentIndex)
    return this.currentIndex;
}

Slider.prototype.slider = function(index){
    var that = this 
    var obj = {'transform':'translateZ(-724px) rotateY('+ index*45 +'deg) rotateX(0deg)'}
    if(this.animating) return;
    this.animating = true
    this.imgContent.css(obj) 
    this.animating = false  
}
Slider.prototype.continuous = function() {
    var that = this
    // if(isMoving) return;
    // isMoving = false
    setInterval(function(){
        var index = that.calculateIndex(true)
        that.slider(index) 
        // that.isMoving = true
    }, 3000)
    // if(this.isMoving){
    //     clearInterval()
    // }

}

new Slider($('.container'))