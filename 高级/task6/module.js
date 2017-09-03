// 模块模式
var Person = (function(){
    var name = 'mhy';
    function sayName(){
        console.log(name);
    }
    return {
        name: name,
        sayName: sayName
    }
})()
//闭包方式实现一个模块
/**
var Person = (function(){
    var name = 'mhy';
    return {
        changeName: function(newName){
            name = newName;
        },
        sayName: function(){
            console.log(name);
        }
    };
})()

Person.sayName();
Person.changeName('mhy');
Person.sayName();

*/