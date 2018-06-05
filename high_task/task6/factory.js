// 工厂模式
function createPerson(opts){
    var person = {
        name: opts.name || 'mhy',
        sayName: function(){
            console.log(this.name)
        }
    };
    return person;
}
var p1 = createPerson({name : 'mhy'});
var p2 = createPerson({name : '小李'});

// 工厂模式，每次使用都要new一个实例