var People = (function(){
    var instance;
    function init(name){
        //define private methods and properties
        //do something
        return {
            //define public methods and properties
            name: name
        };
    } //词法作用域
    return {
        createPerple: function(name){
            if(!instance){
                instance = init(name);
            }
            return instance;
        }
    };
})()

var obj1 = People.createPeople('mhy'); // {name: 'mhy'}
var obj2 = People.createPeople('小李子'); //{name: 'mhy'}

//初始化一次后，之后每次调用，输出的值为第一次初始的值
// 单例模式， 常用于对话框  dialog