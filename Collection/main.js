

	var learnData = {
		"Github":"https://github.com/",
		"掘金":"https://juejin.im/",
		"MDN":"https://developer.mozilla.org/zh-CN/",
		"segmentfault":"https://segmentfault.com/",
		"Vue文档":"https://cn.vuejs.org/",
		"知乎":"https://www.zhihu.com/",
		"网易云课堂":"http://study.163.com/",
		"慕课网":"http://www.imooc.com/",
		"廖雪峰学习网站":"https://www.liaoxuefeng.com/",
		"阮一峰博客":"http://www.ruanyifeng.com/blog/",
		"CSDN":"http://my.csdn.net/my/mycsdn",
		"博客园":"https://www.cnblogs.com/cate/javascript/",
		"npm":"https://www.npmjs.com/",
		"饥人谷社区":"https://jirengu.com/",
		"阿里巴巴Iconfont图库":"http://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2",
		"Font Awesome":"http://fontawesome.io/icons/",
		"Leancloud数据管理":"https://leancloud.cn/dashboard/applist.html#/apps",
		"Less中文文档":"http://lesscss.cn/",
		"图灵机器人":"http://wap.tuling123.com/",
		"腾讯云":"https://cloud.tencent.com/",
		"阿里云":"https://www.aliyun.com/solution/all"
	};
	var toolData = {
		"jQuery插件":"http://www.jq22.com/jquery-info7073",
		"极简图床":"https://jiantuku.com/#/",
		"饥人谷图片API":"http://cdn.jirengu.com/book.jirengu.com/",
		"Can I Use":"https://caniuse.com/",
		"Ma Hua Markdown在线编辑":"http://mahua.jser.me/",
		"Pixabay":"https://pixabay.com/",
		"花瓣网":"https://huaban.com/",
		"BROWSERHACKS hacks写法查询":"http://browserhacks.com/",
		"VSCode快捷键":"https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf",
		"常用颜色MDN":"https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value",
		"常用颜色菜鸟教程":"http://www.runoob.com/html/html-colornames.html",
		"LintCode":"http://www.lintcode.com/zh-cn/problem/",
		"牛客网":"https://www.nowcoder.com/7216906",
		"Codepen":"https://codepen.io/",
		"JS Bin":"http://js.jirengu.com/?html"
	};
	var guideData = {
		"自学IT网站知乎帖子":"https://www.zhihu.com/question/33248790",
		"常见排序算法之JavaScript实现":"https://zhuanlan.zhihu.com/p/28130533",
		"布局篇-Grid布局":"http://blog.csdn.net/iamsupercola/article/details/7039439",
		"jquery文档":"http://www.jquery123.com/",
		"饥人谷文档":"http://book.jirengu.com/fe/",
		"JavaScript教程-阮一峰":"http://javascript.ruanyifeng.com/",
		"JavaScript教程-廖雪峰":"https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000",
		"ES6入门-阮一峰":"http://es6.ruanyifeng.com/",
		"javascript正则表达式":"http://www.cnblogs.com/rubylouvre/archive/2010/03/09/1681222.html",
		"CSS 预处理器":"http://hyuhan.com/2016/09/07/compares-less-sass-and-stylus/"
	};
// console.log(learnData)

var learnCt = document.querySelector('#learn')
var toolCt = document.querySelector('#tool')
var guideCt = document.querySelector('#guide')
// console.log(learnCt)
function render(obj){
	let ulNode = document.createElement('ul')


	for(let key in obj){
		str = `<li><a href="'${key}">${obj[key]}</a></li>`
		return str;
		console.log(str)
	}
	let html = ulNode.appendChild(str.join(''))

	// // 获取key(你说要key的)
	// console.log(Object.keys(obj));    // 输出["name", "job", "gender"]

	// // 获取value(这样可以同时访问值)
	// Object.keys(obj).forEach(function(key){
	// 	console.log('key: ' + key + ' ,value: ' + obj[key]);
	// });

	// Array.prototype.map.call(obj, function(val,index){
	// 	let str = '<li><a href="'+val+'">'+index+'</a></li>'.join('');

	// 	// let str = '<li><a href="'${val}">${index}</a></li>`.join('');

	// 	console.log('str is :' +str)
	// 	ulNode.appendChild(str)
	// })
	// return html;
}

learnCt.appendChild(render(learnData))

// toolCt.appendChild(render(toolData))
// guideCt.appendChild(render(guideData))
	// Array.prototype.map.call(arr,function(val,index,arr){
	// 	strLearn = `<li class="item"><a href="${arr[val]}">${arr[key]}</a></li>`
	// })