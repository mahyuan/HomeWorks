#####题目1： 什么是同源策略
浏览器出于安全方面的考虑，只允许与本域下的接口交互。不同源的客户端脚本在没有明确授权的情况下，不能读写对方的资源。
本域指的是？ 
**同协议**：如都是http,https,file,ssh,mailto,tel 
**同域名**(在//后到第一个/之间)： 
如都是`http://jirengu.com/a` 和`http://jirengu.com/b` 
**同端口**：如都是80端口 
如：`http://jirengu.com/a/b.js` 和` http://jirengu.com/index.php `(同源) 

不同源的例子： `http://jirengu.com/main.js` 和 `https://jirengu.com/a.php` (协议不同) `http://jirengu.com/main.js` 和 `http://bbs.jirengu.com/a.php` (域名不同，域名必须完全相同才可以) 
`http://jiengu.com/main.js` 和 `http://jirengu.com:8080/a.php` (端口不同,第一个是80) 

需要注意的是: 对于当前页面来说页面存放的 JS 文件的域不重要，重要的是加载该 JS 页面所在什么域

#####题目2： 什么是跨域？跨域有几种实现形式

- 什么是跨域？ 
允许不同域的接口进行交互
- 跨域有几种实现形式 ?
  1.  JSONP 
  2.  CORS 
  3.  降域 
  4.  postMessage

#####题目3： JSONP 的原理是什么
html中script标签可以引入其他域下的js，比如引入线上的jquery库。利用这个特性，可实现跨域访问接口。需要后端支持
`echo $cb . '&&' . $cb . '(' . json_encode($ret) . ')';`
    定义数据处理函数_fun
    创建script标签，src的地址执行后端接口，最后加个参数callback=_fun
    服务端在收到请求后，解析参数，计算返还数据，输出 fun(data) 字符串。
    fun(data)会放到script标签做为js执行。此时会调用fun函数，将data做为参数。

#####题目4： CORS是什么

CORS 全称是跨域资源共享（Cross-Origin Resource Sharing），是一种 ajax 跨域请求资源的方式，支持现代浏览器，IE支持10以上。 实现方式很简单，当你使用 XMLHttpRequest 发送请求时，浏览器发现该请求不符合同源策略，会给该请求加一个请求头：Origin，后台进行一系列处理，如果确定接受请求则在返回结果中加入一个响应头：Access-Control-Allow-Origin; 浏览器判断该相应头中是否包含 Origin 的值，如果有则浏览器会处理响应，我们就可以拿到响应数据，如果不包含浏览器直接驳回，这时我们无法拿到响应数据。所以 CORS 的表象是让你觉得它与同源的 ajax 请求没啥区别，代码完全一样.

#####题目5： 根据视频里的讲解演示三种以上跨域的解决方式 ，写成博客
JSONP
index.html
```
  <script>
    var btn = document.querySelector('.query-area button')
    var input = document.querySelector('.query-area input')
    btn.addEventListener('click', function(){
       var xhr = new XMLHttpRequest()
       xhr.onreadystatechange = function(){
         if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
          var friends = JSON.parse(xhr.responseText)
          render(friends)
         }
       }

      xhr.open('get', '/getFriends?username=' + input.value, true)
      xhr.send()
    })
    function render(friends){
      var detailCt = document.querySelector('.detail-area ul')
      detailCt.innerHTML = '';
      var ct = document.createDocumentFragment()
      for(var i = 0; i < friends.length; i++){
        var node = document.createElement('li')
        node.innerText = friends[i]
        ct.appendChild(node)
      }
      detailCt.appendChild(ct)
    }
  </script> 
```
router.js
```
function setRouter(app){ 
 var router = app; 

app.get('./getNews',function(req,res){
	var news=[
		"第11日前瞻：中国冲击4金 博尔特再战200米羽球",
        "正直播柴飚/洪炜出战 男双力争会师决赛",
        "女排将死磕巴西！郎平安排男陪练模仿对方核心",
        "没有中国选手和巨星的110米栏 我们还看吗？",
        "中英上演奥运金牌大战",
        "博彩赔率挺中国夺回第二纽约时报：中国因对手服禁药而丢失的奖牌最多",
        "最“出柜”奥运？同性之爱闪耀里约",
		"下跪拜谢与洪荒之力一样 都是真情流露"
	]
	var data=[];
	for(var i=0;i<3;i++){
		var index=parseInt(Math.random()*news.length);
		data.push(news[index]);
		news.splice(index,1);
	}
	var cb=req.query.callback;
	if(cb){
		res.send(cb+'('+JSON.stringify(data)+')');
	}else{
		res.send(data);
	}
})}
 module.exports.setRouter = setRouter
```
CORS
index.html
```
<div class="container">
      <ul class="news">
        <li>中英上演奥运金牌大战</li>
        <li>没有中国选手和巨星的110米栏 我们还看吗？ </li> 
        <li>下跪拜谢与洪荒之力一样 都是真情流露</li>
      </ul>
      <button class="change">换一组</button>
</div>
<script>
		$('.change').addEventListener('click',function(){
			var xhr=new XMLHttpRequest();
			xhr.open('get','http://b.ji.com:8080/getNews', true);
			xhr.send();
			xhr.onreadystatechange=function(){
				if(xhr.readyState===4&&xhr.status===200){
					appendHtml(JSON.parse(xhr.responseText))
				}
			}
			window.xhr=xhr
		})
		function appendHtml(news){
			var html='';
			for(var i=0;i<news.length;i++){
				html+='<li>'+news[i]+'</li>';
			}
			$('.news').innerHTML=html;
		}
		function $(id){
			return document.querySelector(id);
		}
	</script>

```
router.js
```
app.get('/getNews',function(req,res){
	var news=[
		"第11日前瞻：中国冲击4金 博尔特再战200米羽球",
        "正直播柴飚/洪炜出战 男双力争会师决赛",
        "女排将死磕巴西！郎平安排男陪练模仿对方核心",
        "没有中国选手和巨星的110米栏 我们还看吗？",
        "中英上演奥运金牌大战",
        "博彩赔率挺中国夺回第二纽约时报：中国因对手服禁药而丢失的奖牌最多",
        "最“出柜”奥运？同性之爱闪耀里约",
		"下跪拜谢与洪荒之力一样 都是真情流露"
	]
	var data=[];
	for(var i=0;i<3;i++){
		var index=parseInt(Math.random()*news.length);
		data.push(news[index]);
		news.splice(index,1);
	}
	res.header("Accexx-Control-Allow-Origin","http://a.ji.com:8080");
	//res.header("Access-Control-Allow-Origin", "*");
	res.send(data);
})


```
降域
a.html
```
<body>
    <div class="ct">
        <h1>使用降域实现跨域</h1>
        <div class="main">
            <input type="text" placeholder="http://a.ji.com:8080/a.html">
        </div>
        <iframe src="http://b.ji.com:8080/b.html" frameborder="0"></iframe>
    </div>
    <script>
        document.querySelector('.main input').addEventListener('input',function(){
            window.frames[0].document.querySelector('input').value=this.value;
        })
        document.domain="ji.com"  
    </script> 

```
b.html
```
    <input id="input" type="text" placeholder="http://b.ji.com:8080/b.html">
    <script>
        document.querySelector('#input').addEventListener('input',dunction(){
            window.parsent.document.querySelector('input').value=this.value;
        })
        document.domain='ji.com'
    </script> 
```
postMessage
a.html
```
    <div class="ct">
        <h1>使用postMessage实现跨域</h1>
        <div class="main">
            <input type="text" placeholder="http://a.ji.com:8080/a.html">
        </div>
        <iframe src="http://b.ji.com:8080/b.html" frameborder="0"></iframe>
    </div>
    <script>
        $('.main input').addEventListener('input',function(){
            console.log(this.value);
            window.frames[0].postMessage(this.value,'*');
        })
        window.addEventListener('message',function(e){
            $('.main input').value=e.data;
            console.log(e.data);
        });
        function $(id){
            return document.querySelector(id);
        }
    </script>
```
b.html
```
    <input id="input" type="text" placeholder="http://b.ji.com:8080/b.html">
    <script>
        $(#input).addEventListener('input',function(){
            window.parsent.postMessage(this.value,"*");
        })
        window.addEventListener('message',function(e){
            $('#input').value=e.data;
            console.log(e.data);
        });
        function $(id){
            return document.querySelector(id);
        }
    </script>
```