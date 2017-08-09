$(function(){

    var WaterFull=(function(){
        function init(){
            waterfull()
            $(window).resize(function(){
                waterfull()
            })
        }

        function waterfull(){
            var curLength=parseInt($('.content').width()/$('.item').width())
            var itemArr=[]
            for( i = 0; i < curLength; i++){
                itemArr[i] = 0
            }

            $('.item').each(function(){
                var minVal = Math.min.apply(null, itemArr)
                var minIndex = itemArr.indexOf( minVal )
                
                $(this).css({
                    top: itemArr[minIndex],
                    left: $(this).outerWidth( true )*minIndex
                })
                itemArr[minIndex] += $(this).outerHeight(true)
            })
        }

        return {
            init:init
        }
    })()
    WaterFull.init()
})

