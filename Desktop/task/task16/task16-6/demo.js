// task16-6

$(function(){
    var pageIndex=0;
    var isOver=false;
    var isNewsArrive=true;

    getNews();
    $(window).on('scroll',checkNews)
                // console.log('checkNews go')
    function checkNews(){  
        if( isShow($('.load-more')) && !isOver && isNewsArrive ){
            getNews();
        }
                // console.log('checkNews go')
    }

    function getNews(){
        isNewsArrive=false;
        $.get('/getNews', {page: pageIndex}).done(function(ret){
            isNewsArrive=true;
            if( ret.status == 0 ){
                pageIndex++;
                appendHtml(ret.data);
                checkNews();
                    // console.log('getNews go')
            }else{
                alert("获取新闻出错");
            }
        }).fail(function(){
            alert("系统异常");
        })
    }
    
    function appendHtml(news){
        if( news.length === 0 ){
            isOver=true;
            $('.container').append('<p>没有更多数据了</>')
            // return;
        }
        var htmls='';
        $.each(news,function(){
            htmls +=' <li class="item">'; 
            htmls +=' <a href=" '+ this.link + ' " >';
            htmls +=' <div class="thumb"><img src=" ' + this.img + ' "></div>';
            htmls +=' <h2>' + this.title + '</h2>';
            htmls +=' <p>'  + this.brif + '</p>';
            htmls +=' </a> '
            htmls +=' </li> '
        })
        $('.news').append(htmls);
                // console.log('appendHtml go')
    }

    function isShow($node){
        console.log('show',$node);
        var windowHeight=$(window).height();
        var scrollTop=$(window).scrollTop();
        var offsetTop=$node.offset().top;
        var nodeHeight=$node.height();
        if( windowHeight + scrollTop > offsetTop && scrollTop < offsetTop + nodeHeight){
            return true;
        }else{
            return false;
        }
                // console.log('isShow go')
    }
})