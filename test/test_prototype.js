/**
 * Created by tyw on 15/8/24.
 */
//普通对象方法
var fn = function(){
    console.log('comment function');
};
fn();

console.log('---------');

function People(name) {
    this.name = name;
    //函数内对象方法
    this.Introduce = function () {
        console.log("My name is " + this.name);
    }
}

//类方法
People.Run = function () {
    console.log("I can run");
}

//原型方法
People.prototype.IntroduceChinese = function () {
    console.log("a我的名字是" + this.name);
}
//两次使用prototype,第一个原型方法被覆盖
People.prototype.IntroduceChinese = function () {
    console.log("b我的名字是" + this.name);
}

//测试对象方法
var p1 = new People('tyw');
p1.Introduce();

//测试类方法
People.Run();

//测试原型方法
p1.IntroduceChinese();

console.log('-------before---------');
console.log(People);
console.log(p1);
p1.IntroduceChinese();
//删除操作
delete  People.Run;
delete  p1.Introduce;
delete  p1.IntroduceChinese;
console.log('--------after--------');
console.log(People);
console.log(p1);
p1.IntroduceChinese();

//JavaScript 中的所有事物都是对象：字符串、数值、数组、函数...
//结论：类方法中的对象（包括对象方法）、类方法都可被删除，原型方法不能删除