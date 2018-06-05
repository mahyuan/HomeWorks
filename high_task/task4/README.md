# AMD_CMD_RequireJS

标签（空格分隔）：  模块化

---

## 题目1： 为什么要使用模块化？
需要解决的问题：JS没有模块化系统，标准库较少，缺乏包管理系统
最主要的目的：
1. 解决命名冲突

通过 exports 暴露接口。这意味着不需要命名空间了，更不需要全局变量。这是一种彻底的命名冲突解决方案。

2. 依赖管理

通过 require 引入依赖。这可以让依赖内置，开发者只需关心当前模块的依赖，其他事情 Sea.js 都会自动处理好。对模块开发者来说，这是一种很好的 关注度分离，能让程序员更多地享受编码的乐趣。

3. 提高可维护性。

模块化提高了代码可读性，可以让每个文件的职责单一，非常有利于代码的维护。

4. 在前端工程化潮流下，模块化拥有更多的含义，包括组件化+多人合作

实现代码解耦，提高复用性，可以很方便实现模块的跨服务器和浏览器共享，实现组件化和多人合作。

## 题目2： CMD、AMD、CommonJS 规范分别指什么？有哪些应用

### **CMD 规范**

CMD（Common Module Definition）是 SeaJS推广过程中产生的。

在 CMD 规范中，一个模块就是一个文件。代码的书写格式如下：
```
define(factory);
```
通过exports暴露接口，这意味着不需要命名空间了，更不需要全局变量了
通过requires引入依赖，这可以让依赖内置，开发者只需要关心当前模块
代表：sea.js

### **AMD 规范**

AMD (Asynchronous Module Definition, 异步模块定义) 指定一种机制，在该机制下模块和依赖可以移步加载。这对浏览器端的异步加载尤其适用。

语法
```
define(id?, dependencies?, factory);
```

AMD：asynchronous module definition[requier.js, sea.js]
node.js commonjs{require+exports+module.exports}

### **CommonJS 规范**

CommonJS是服务器端模块的规范，Node.js采用了这个规范。Node.JS首先采用了js模块化的概念。

>1. 在一个模块中，存在一个自由的变量”require”，它是一个函数。
    - 这个”require”函数接收一个模块标识符。
    - “require”返回外部模块所输出的API。
    - 如果出现依赖闭环(dependency cycle)，那么外部模块在被它的传递依赖（transitive dependencies）所require的时候可能并没有执行完成；在这种情况下，”require”返回的对象必须至少包含此外部模块在调用require函数（会进入当前模块执行环境）之前就已经准备完毕的输出。
    - 如果请求的模块不能返回，那么”require”必须抛出一个错误。
>2. 在一个模块中，会存在一个名为”exports”的自由变量，它是一个对象，模块可以在执行的时候把自身的API加入到其中。
>3. 模块必须使用”exports”对象来做为输出的唯一表示。

## 题目3： 使用 requirejs 完善入门任务15，包括如下功能：

>1. 首屏大图为全屏轮播
>2. 有回到顶部功能
>3. 图片区使用瀑布流布局（图片高度不一），下部有加载更多按钮，点击加载更多会加载更多数据(数据在后端 mock)
>4.  使用 r.js 打包应用

[页面预览](https://mhy-web.github.io/HomeWorks/高级/task4/)