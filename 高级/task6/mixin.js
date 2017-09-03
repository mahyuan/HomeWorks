// 混合模式
var Person = function(name, age){
    this.name = name;
    this.age = age;
};
Person.prototype.sayName = function(){
    console.log(this.name);
}

var Student = function(name, age, score){
    Person.call(this, name, age);
    //调用call方法，等价于 <==> this.name = name; this.age = age;
    this.score = score;
} ;
//Student.prototype = Object.create(Person.prototype);
Student.prototype = create(Person.prototype);

function create(parentObj){
    function F(){};
    F.prototype = parentObj;
    return new F();
};

Student.prototype.sayScore = function(){
    console.log(this.score);
}
var student = new Student("mhy", 24, 98);
console.log(student);

// 继承方式实现一个模块