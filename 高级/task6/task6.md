1. 写出 构造函数模式、混合模式、模块模式、工厂模式、单例模式、发布订阅模式的范例。

[构造函数模式](https://github.com/mhy-web/HomeWorks/tree/master/%E9%AB%98%E7%BA%A7/task6/constructor.js);

[混合模式](https://github.com/mhy-web/HomeWorks/tree/master/%E9%AB%98%E7%BA%A7/task6/mixin.js);

[模块模式](https://github.com/mhy-web/HomeWorks/tree/master/%E9%AB%98%E7%BA%A7/task6/module.js);

[工厂模式](https://github.com/mhy-web/HomeWorks/tree/master/%E9%AB%98%E7%BA%A7/task6/factory.js);

[单例模式](https://github.com/mhy-web/HomeWorks/tree/master/%E9%AB%98%E7%BA%A7/task6/singleton.js);

[发布订阅模式的范例](https://github.com/mhy-web/HomeWorks/tree/master/%E9%AB%98%E7%BA%A7/task6/pubsub.js)

2. 使用发布订阅模式写一个事件管理器，可以实现如下方式调用

```
Event.on('change', function(val){
    console.log('change...  now val is ' + val);
});
Event.fire('change', '饥人谷');
Event.off('changer');
```
