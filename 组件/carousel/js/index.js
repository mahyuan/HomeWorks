    // js for index  
(function _Carousel(){


    var Carousel = function ($ct){
        this.$ct = $ct;
        this.init();
        this.bind();
    }
    
    Carousel.prototype.init = function(){
        var $imgCt = this.$imgCt = this.$ct.find('.img-ct');
        var $pre = this.$pre = this.$ct.find('.pre');
        var $next = this.$next = this.$ct.find('.next');
        var $bullet = this.$bullet = this.$ct.find('.bullet');
        var $bulletLi = this.$bulletLi = this.$bullet.find('li');

        var $firstImg = $imgCt.find('li').first();
        var $lastImg = $imgCt.find('li').last();
        var $imgWidth = $imgCt.find('li').find('img').width();

        this.curPageIndex = 0;
        this.imgLength = $imgCt.find('li').length;
        this.isAnimate = false;

        $imgCt.prepend($lastImg.clone());
        $imgCt.append($firstImg.clone());

        $imgCt.width = $imgWidth * this.imgLength ;
    }
    
    Carousel.prototype.bind = function(){
        var that = this;
        this.$next.click(function(e){
            e.preventDefault();
            that.playNext(1);
        })
        this.$pre.click(function(e){
            e.preventDefault();
            that.playPre(1);
        })

        this.$bulletLi.click(function(e){
            var index=$(this).index();
            e.preventDefault();
            console.log('bulletLi index:'+index);
            if(index > that.curPageIndex){
                that.playNext(index - that.curPageIndex)
            }else if( index < that.curPageIndex ){
                that.playPre(that.curPageIndex - index);
            }
            that.slider(that.curPageIndex)
        })
    }

    Carousel.prototype.slider = function(index){
        var that = this
        this.isAnimate = true
        this.$imgCt.animate({
            'left': index*(-320) +'px'  
        },function(){
            that.isAnimate = false
        })
        this.setBullet(index) 
    }

    Carousel.prototype.playPre = function(len){
        var that = this
        this.curPageIndex-=len
        if(this.curPageIndex < 0){
            that.curPageIndex = this.imgLength-1
        }
        var index = this.curPageIndex
        this.slider(index)
    }

    Carousel.prototype.playNext = function(len){
        var that = this
        this.curPageIndex+=len
        if(this.curPageIndex == this.imgLength){
            that.curPageIndex = 0
        }
        var index = this.curPageIndex
        this.slider(index)
    }

    Carousel.prototype.setBullet = function(){
        this.$bulletLi
            .removeClass('active')
            .eq(this.curPageIndex)
            .addClass('active')
    }
    new Carousel($('.carousel').eq(0))
})()


/*
    var Carousel = function ($ct){
        this.$ct = $ct;
        this.init();
        this.bind();
        // this.playNT();
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
*/
/*
     $(function(){
        var $imgCt=$('.carousel .img-ct');
        var $imgs=$('.carousel .img-ct>li');

        var $nextBtn=$('.carousel .next');
        var $preBtn=$('.carousel .pre');
        var $bullets=$('.bullet li');

        var pageIndex=0;
        var isAnimate=false;
        var imgCount=$imgs.length;
        var imgWidth=$imgs.width();

        $imgCt.append($imgs.first().clone());
        $imgCt.prepend($imgs.last().clone());
        $imgCt.width((imgCount + 2) * imgWidth );
        $imgCt.css({left: - imgWidth});
        
        $nextBtn.click(function(){
            playNext(1)
        })
        $preBtn.click(function(){
            playPre(1)
        })
        $bullets.click(function(){
            var index = $(this).index();
            console.log(index);
            if(index > pageIndex){
                playNext(index - pageIndex)
            }else if( index < pageIndex ){
                playPre(pageIndex - index);
            }    
        })
        
        function playNext(len){         
            if(isAnimate) return;
            isAnimate = true;

            $imgCt.animate({
                left:'-=' + len*imgWidth
            },function(){
                pageIndex += len;
                if(pageIndex === imgCount){
                    pageIndex = 0;
                    $imgCt.css({left: - imgWidth})
                }
                console.log(pageIndex)
                setBullet()
                isAnimate = false
            })
        }

        function playPre(len){
            $imgCt.animate({
                left:'+=' +len* imgWidth 
            },function(){
                pageIndex -= len;
                if( pageIndex < 0 ){
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

        setInterval(function(){
            playNext(1)
        },5000)
    })
*/