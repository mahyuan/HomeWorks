    // js for index   
    function Carousel($ct){
        this.$ct = $ct;
        this.init();
        this.bind();
        this.playNT();
    }
    
    Carousel.prototype.init = function(){
        var $imgCt = this.$imgCt = this.$ct.find('.img-ct');
        var $pre = this.$pre = this.$ct.find('.pre');
        var $next = this.$next = this.$ct.find('.next');
        var $bullet = this.$bullet = this.$ct.find('.bullet');
        var $bulletLi = this.$bulletLi = this.$bullet.find('li');

        var $firstImg = $imgCt.find('li').first();
        var $lastImg = $imgCt.find('li').last();

        var $imgWidth = $imgCt.find('li').width();

        this.curPageIndex = 0;
        this.imgLength = $imgCt.children().length;
        this.isAnimate = false;

        $imgCt.prepend($lastImg.clone());
        $imgCt.append($firstImg.clone());

        $imgCt.width($imgWidth * this.imgLength);
        $imgCt.css({
            'left' : '-$imgWidth'
        })
    }
    
    Carousel.prototype.bind = function(){
        var _this = this;
        this.$next.click(function(e){
            e.preventDefault();
            _this.playNext();
        })
        this.$pre.click(function(e){
            e.preventDefault();
            _this.playPre();
        })
    //     this.$bulletLi.click(function(){
    //         var _this = this;
    //         var $index = $bulletLi.eq();
    //         if(index < curPageIndex){
    //             _this.playPre(_this.curPageIndex - $index)
    //         }
    //         else if( $index > _this.curPageIndex){
    //             _this.playNext($index - _this.curPageIndex)
    //         }
    //     })
     }

    Carousel.prototype.playPre = function(){
        var _this = this ;
        if(this.isAnimate) return;
        this.isAnimate = true;
        this.$imgCt.animate({
            'left':  '+=$imgWidth'
        },function(){
            _this.curPageIndex --;
            if(_this.curPageIndex < 0){
                _this.$imgCt.css({'left': '-(_this.imgLength*$imgWidth) ' })
                _this.curPageIndex = _this.imgLength - 1;
            } 
        })
        console.log(_this.curPageIndex) 

        this.setBullet() 
        this.isAnimate = false;
    }

    Carousel.prototype.playNext = function(){
        var _this = this;
        if(this.isAnimate) return;
        this.isAnimate = true;
        this.$imgCt.animate({
            'left': '-= $imgWidth'
        },function(){
            _this.curPageIndex ++;
            if( _this.curPageIndex === _this.imgLength ){ 
                _this.curPageIndex = 0;                  
                $imgCt.css({ 'left' : '- ($imgWidth)'  }) ;   
            }              
        })
        console.log(_this.curPageIndex) 
        _this.setBullet();
        _this.isAnimate = false;
    }

    Carousel.prototype.setBullet = function(){
        this.$bullet.children()
            .removeClass('active')
            .eq(this.curPageIndex)
            .addClass('active')
    }

    Carousel.prototype.playNT = function(){
        var _this = this
        this.setInterval(function(){
            _this.playNext(1)
        },2000)
    }

    new Carousel($('.carousel').eq(0))
    // new Carousel($('.carsousel')[1])

/* $(function(){
    function 


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
})
*/