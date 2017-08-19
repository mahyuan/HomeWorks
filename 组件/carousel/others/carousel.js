var Carousel = {
    init:function($carousel){
        this.$carousel = $carousel
        var $ct = this.$ct = $carousel.find('.imt-ct')
        this.$pre = $carousel.find('.pre')
        this.$next = $carousel.find('.next')
        this.imgWidth = $ct.find('li').width()
        this.imgSize = $ct.find('li').size()

        $ct.css('width',this.imgWidth * this.imgSize )
        this.bind()
    }
}
Carousel.prototype = {
    bind: function(){
        var _this = this
        this.$pre.on('click',function(){
            _this.showPre()
        })
        this.$next.on('click',function(){
            _this.shouNext()
        })
    },
    showPre: function(){
        var $ct = this.$ct
        $ct.animate({'left':0-this.imgWidth},function(){
            $ct.prepend($ct.children().last())
            $ct.css('left',0)
        })
    },
    showNext: function(){
        var $ct = this.$ct
        $ct.animate({'left':0-this.imgWidth},function(){
            $ct.append($ct.children().first())
            $ct.css('left',0)
        })
    }
}

// var c1 = new Carousel($('#c1'))
// var c2 = new Carousel($('#c2'))

// $('.carousel').each(function(){
//     new Carousel($(this))
// })

new Carousel($('.carousel').eq(0))
new Carousel($('.carousel').eq(1))


// CarouselCenter.init($('#c1'))
// CarouselCenter.init($('#c2'))
// CarouselCenter.init($('#c3'))

// CarouselCenter.init($('.carousel'))

/*
// 申明即执行
var CarouselCenter = (function(){
    // var carouselList = []

    function init($carousel){
        $carousel.each(function(){
            var $cal = $(this)
            // if($cal.hasClass('init')){
            if($cal.attr('data-cal')){
                return
            }
            new Calousel($(cal))
            $cal.addClass('init')
        })
    }
    function getList(){
        return carouselList
    }

    //

})()

*/