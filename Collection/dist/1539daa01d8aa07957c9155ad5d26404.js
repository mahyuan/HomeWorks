"use strict";

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = function (_require) {
  function require(_x, _x2, _x3) {
    return _require.apply(this, arguments);
  }

  require.toString = function () {
    return _require.toString();
  };

  return require;
}(function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module();

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
});({8:[function(require,module,exports) {
let data = [
	{
		"desc": "学习类",
		"list":  [
			{"Github":"https://github.com/"},
			{"掘金":"https://juejin.im/"},
			{"MDN":"https://developer.mozilla.org/zh-CN/"},
			{"segmentfault":"https://segmentfault.com/"},
			{"Vue文档":"https://cn.vuejs.org/"},
			{"知乎":"https://www.zhihu.com/"},
			{"网易云课堂":"http://study.163.com/"},
			{"慕课网":"http://www.imooc.com/"},
			{"廖雪峰学习网站":"https://www.liaoxuefeng.com/"},
			{"阮一峰博客":"http://www.ruanyifeng.com/blog/"},
			{"CSDN":"http://my.csdn.net/my/mycsdn"},
			{"博客园":"https://www.cnblogs.com/cate/javascript/"},
			{"npm":"https://www.npmjs.com/"},
			{"饥人谷社区":"https://jirengu.com/"},
			{"阿里巴巴Iconfont图库":"http://www.iconfont.cn/home/index?spm=a313x.7781069.1998910419.2"},
			{"Font Awesome":"http://fontawesome.io/icons/"},
			{"Leancloud数据管理":"https://leancloud.cn/dashboard/applist.html#/apps"},
			{"Less中文文档":"http://lesscss.cn/"},
			{"图灵机器人":"http://wap.tuling123.com/"},
			{"腾讯云":"https://cloud.tencent.com/"},
			{"阿里云":"https://www.aliyun.com/solution/all"}
		]
	},
	{
		"desc": "工具类",
		"list": [
			{"jQuery插件":"http://www.jq22.com/jquery-info7073"},
			{"极简图床":"https://jiantuku.com/#/"},
			{"饥人谷图片API":"http://cdn.jirengu.com/book.jirengu.com/"},
			{"Can I Use":"https://caniuse.com/"},
			{"Ma Hua Markdown在线编辑":"http://mahua.jser.me/"},
			{"Pixabay":"https://pixabay.com/"},
			{"花瓣网":"https://huaban.com/"},
			{"BROWSERHACKS hacks写法查询":"http://browserhacks.com/"},
			{"VSCode快捷键":"https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf"},
			{"常用颜色MDN":"https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value"},
			{"常用颜色菜鸟教程":"http://www.runoob.com/html/html-colornames.html"},
			{"LintCode":"http://www.lintcode.com/zh-cn/problem/"},
			{"牛客网":"https://www.nowcoder.com/7216906"},
			{"Codepen":"https://codepen.io/"},
			{"JS Bin":"http://js.jirengu.com/?html"}
		]
	},
	{
		"desc": "教程类",
		"list": [
			{"自学IT网站知乎帖子":"https://www.zhihu.com/question/33248790"},
			{"常见排序算法之JavaScript实现":"https://zhuanlan.zhihu.com/p/28130533"},
			{"布局篇-Grid布局":"http://blog.csdn.net/iamsupercola/article/details/7039439"},
			{"jquery文档":"http://www.jquery123.com/"},
			{"饥人谷文档":"http://book.jirengu.com/fe/"},
			{"JavaScript教程-阮一峰":"http://javascript.ruanyifeng.com/"},
			{"JavaScript教程-廖雪峰":"https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000"},
			{"ES6入门-阮一峰":"http://es6.ruanyifeng.com/"},
			{"javascript正则表达式":"http://www.cnblogs.com/rubylouvre/archive/2010/03/09/1681222.html"},
			{"CSS 预处理器":"http://hyuhan.com/2016/09/07/compares-less-sass-and-stylus/"}
		]
	}

];

let parents = document.querySelectorAll('figure');
console.log(parents)
console.log(data)

// let template = `<li></li>`
// parents


Array.prototype.forEach.call(data, function(it, index) {

	console.log(it)
})












// var learnCt = document.querySelector('#learn')
// var toolCt = document.querySelector('#tool')
// var guideCt = document.querySelector('#guide')

// function render(obj){
// 	let ulNode = document.createElement('ul')


// 	for(let key in obj){
// 		str = `<li><a href="'${key}">${obj[key]}</a></li>`
// 		return str;
// 	}
// 	let html = ulNode.appendChild(str.join(''))

// }

// learnCt.appendChild(render(learnData))


},{}],0:[function(require,module,exports) {
'use strict';

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function accept(fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function dispose(fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://localhost:54473/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[0,8])