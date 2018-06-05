## 题目1： 如何全局安装一个 node 应用?

`npm install -g xxx`,模块将会安装在电脑的全局目录中，安装的模块能够在所有目录下使用。

## 题目2： `package.json` 有什么作用？

作用：

- 相当于你本地项目的一个文档说明。
- 允许你指定你项目中所使用的node包的版本。
- 构建你的项目更加容易，便于给其他人共享。

一个典型的package.json文件如下所示。
```
    {
        "name": "my_package",     //你的项目名称，全部小写，不能有空格，一个单词，允许-和_. 如果是要发布自己的node插件，一般用github上面项目名称。 下次有机会说明 npm 上面的发布流程。

        "version": "1.0.0",  //你的项目版本号，最好遵守 GNU 版本号管理。

        "main": "index.js", //目录中启动文件名称。或者称之为入口文件，一般都是 index.js

        "scripts": {

            "test": "echo \"Error: no test specified\" && exit 1"    //一般默认一个test的空文件夹、用作写测试代码。

        },

        "keywords": [],  //项目的关键词。 一般用不到，发布npm才用得到。

        "author": "ag_dubs", //作者名称

        "license": "ISC", //协议

        "repository": {  // 用来存放到 版本管理远程服务。 发布npm才有用

            "type": "git",

            "url": "https://github.com/ashleygwilliams/my_package.git"

        },

        "dependencies": {   // 正式使用时，依赖的包

            "my_dep": "^1.0.0"

        },

        "devDependencies" : {//开发或者测试时，依赖的包。

            "my_test_framework": "^3.1.0"

        }

        "bugs": {  //同repository

            "url": "https://github.com/ashleygwilliams/my_package/issues"

        },

        "homepage": "https://github.com/ashleygwilliams/my_package"  //项目主页、 发布才有用

    }
```
一般情况，如果是自己的项目，特别是前端的人，会使用到gulp或者grunt来打包自己的项目，并且一般不会吧node_modules上传到git上面，所以需要package来管理自己打包所需的插件，以便于项目中其他人员共享，这个文件的好处就是一个人添加某个插件后，更改了这个文件，其他人员只需要同步此文件，然后执行npm install命令，即可安装同样的包。

package.json必须是一个严格的json文件，而不仅仅是js里边的一个对象。其中很多属性可以通过npm-config来生成。配置好依赖后，别人在使用代码时可以npm install直接安装依赖，方便快捷，减少代码体积。
**name**
name属性就是你的模块名称，下面是一些命名规则:
name必须小于等于214个字节，包括前缀名称在内（如 xxx/xxxmodule）。
name不能以""或"."开头
不能含有大写字母
name会成为url的一部分，不能含有url非法字符下面是官网文档的一些建议：
不要使用和node核心模块一样的名称
name中不要含有"js"和"node"。 It's assumed that it's js, since you're writing a package.json file, and you can specify the engine using the "engines" field. (See below.)
name属性会成为模块url、命令行中的一个参数或者一个文件夹名称，任何非url安全的字符在name中都不能使用，也不能以""或"."开头
name属性也许会被写在require()的参数中，所以最好取个简短而语义化的值。
创建一个模块前可以先到后边的网址查查name是否已经被占用. https://www.npmjs.com/
**ersion**
version必须可以被npm依赖的一个node-semver模块解析。具体规则见下面的dependencies模块
**description**
一个描述，方便别人了解你的模块作用，搜索的时候也有用。
**keywords**
一个字符串数组，方便别人搜索到本模块
**homepage**
项目主页url
注意: 这个项目主页url和url属性不同，如果你填写了url属性，npm注册工具会认为你把项目发布到其他地方了，获取模块的时候不会从npm官方仓库获取，而是会重定向到url属性配置的地址。
**bugs**
可选字段，问题追踪系统的URL或邮箱地址；npm bugs用的上。
```
{ "url" :"http://github.com/owner/project/issues",
 "email" :"project@hostname.com"
}
```
**license**
你应该为你的模块制定一个协议，让用户知道他们有何权限来使用你的模块，以及使用该模块有哪些限制。最简单的，例如你用BSD-3-Clause 或 MIT之类的协议，如下：`{ "license" : "BSD-3-Clause" }` 你可以在https://spdx.org/licenses/这个地址查阅协议列表 。
**author, contributors**
author是一个人，contributors是一组人。

Author的格式如下：
```
{ "name" : "Barney Rubble",
 "email" : "b@rubble.com",
 "url" : "http://barnyrubble.tumblr.com/"
}
```
这种格式也可以：
`"Barney Rubble <b@rubble.com> (http://barnyrubble.tumblr.com/)"`
**files**
项目包含的一组文件。如果是文件夹，文件夹下的文件也会被包含。如果需要把某些文件不包含在项目中，添加一个”.npmignore”文件。这个文件和”gitignore”类似。
**main**
这个字段的值是你程序主入口模块的ID。如果其他用户需要你的包，当用户调用require()方法时，返回的就是这个模块的导出（exports）。
**bin**
很多的包都会有执行文件需要安装到PATH中去。
这个字段对应的是一个Map，每个元素对应一个{ 命令名：文件名 }。
`{ "bin" : { "npm" : "./cli.js" } }`
**script**
scripts属性是一个对象，里边指定了项目的生命周期个各个环节需要执行的命令。key是生命周期中的事件，value是要执行的命令。具体的内容有 `install start stop` 等，详见https://docs.npmjs.com/misc/scripts
**dependencies**
`dependencies`属性是一个对象，配置模块依赖的模块列表，key是模块名称，value是版本范围，版本范围是一个字符，可以被一个或多个空格分割。dependencies也可以被指定为一个git地址或者一个压缩包地址。不要把测试工具或transpilers写到`dependencies`中。

## 题目3： `npm install --save app` 与 `npm install --save-dev app`有什么区别?

- `npm install -save module-name`自动把模块和版本号添加到`dependencies`部分，产品**发布时依赖模块**,譬如像jQuery库或者Angular框架类似的，我们在开发完后后肯定还要依赖它们，否则就运行不了。
- `npm install -save-dev module-name`自动把模块和版本号添加到`devdependencies`部分，**开发过程中依赖模块**,。

## 题目4： `node_modules`的查找路径是怎样的?

`node_module`查找依赖的路线是：先从本地目录下寻找，不存在就依次向上级目录中查询，直到系统根目录。node全局安装在系统根目录下，所以全局安装后可在所有目录下使用。

## 题目5： npm3与 npm2相比有什么改进？yarn和 npm 相比有什么优势? (选做题目)



## 题目6： webpack是什么？和其他同类型工具比有什么优势？

## 题目7：npm script是什么？如何使用？

## 题目8： 使用 webpack 替换 入门-任务15中模块化使用的 requriejs

## 题目9：gulp是什么？使用 gulp 实现图片压缩、CSS 压缩合并、JS 压缩合并

## 题目10： 开发一个 node 命令行天气应用用于查询用户当前所在城市的天气，发布到 npm 上去。可以通过如下方式安装使用(可使用api.jirengu.com里提供的查询天气接口) (选做题目)
```
npm install hunger-weather -g
weather
```


