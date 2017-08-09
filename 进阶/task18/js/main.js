
$(function(){
    var WaterFall=(function(){
        function init(){
            waterfull()
            $(window).resize(function(){
                waterfull()
            })
        }
        function waterfull(){
            var colLength = parseInt($('.wrap').width()/$('.item').width())
            var itemArr=[];
            for( var i = 0 ; i < colLength; i++){
                itemArr[i] = 0
            }

            $('.item').each(function(){
                var minValue=Math.min.apply(null, itemArr)
                var minIndex=itemArr.indexOf(minValue)

                $(this).css({
                    top: itemArr[minIndex],
                    left: $(this).outerWidth(true)*minIndex
                })
                itemArr[minIndex] += $(this).outerHeight(true)
            })
        }
        return {
            init: init
        }

    })()

    WaterFall.init()
})

