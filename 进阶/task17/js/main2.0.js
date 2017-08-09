$(function(){
    var $imgCt=$('.container .img-ct');
    var $imgs=$('.container .img-ct>li');
    var $preBtn=$('.container .pre');
    var $nextBtn=$('.container .next');
    var $stopBtn=$('.container .stop');
    var $startBtn=$('.container .start');
    var $bullets=$('.bullet li');


    var pageIndex=0;
    var imgWidth=$imgs.width();
    var imgCount=$imgs.length;
    var isAnimate=false;


    $imgCt.append($imgs.first().clone());
    $imgCt.prepend($imgs.last().clone());
    $imgCt.width((imgCount + 2) * imgWidth );
    $imgCt.css({left: - imgWidth})

    $nextBtn.click(function(){
        playNext(1)
    })
    $preBtn.click(function(){
        playPre(1)
    })
    
    $bullets.click(function(){
        var index=$(this).index();
        console.log(index);
        if(index < pageIndex){
            playPre(pageIndex - index)
        }
        else if( index > pageIndex){
            playNext(index - pageIndex)
        }
    })

    function playNext(len){
        if(isAnimate) return;
        isAnimate = true ;
        $imgCt.animate({
            left: '-=' + len*imgWidth
        },function(){
            pageIndex += len;
            if( pageIndex === imgCount ){
                pageIndex = 0;
                $imgCt.css({left : - imgWidth})
            }
            console.log(pageIndex);
            setBullet();
            isAnimate = false;
        })
    }

    function playPre(len){
        $imgCt.animate({
            left : '+=' +len*imgWidth
        },function(){
            pageIndex -= len;
            if(pageIndex < 0){
                pageIndex = imgCount - 1;
                $imgCt.css({
                    left: - imgCount*imgWidth
                })
            }
            console.log(pageIndex)
            setBullet()
        })
    }
    function setBullet(){
        $bullets.removeClass('active')
                 .eq(pageIndex)
                 .addClass('active')
    }

    playNT();

    function playNT(){
        setInterval(function(){
            playNext(1)
        },2000)
    }

    // $stopBtn.click(function(){
    //     clearInterval(playNT) 

    // })
    // $startBtn.click(function(){
    //     playNT();
    // })
    

})