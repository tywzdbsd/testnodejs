/**
 * Created by tyw on 15/8/24.
 */
//将对象的属性放到目标函数中然后执行这个函数
var a = {
    name: 'tyw',
    fn: function () {
        console.log('this is a function');
    }
};

var b = function () {
    console.log(this.name);
    this.fn();
};
//直接执行
//b();
//报错，没有this.fn，this.name为undefined

//用call,
b.call(a);
//输出:
//tyw
//this is a function
//用a的环境运行b

console.log('------------');

var fna = function () {
    this.name='tom';
    this.age=25;
};

var fnb = function () {
    console.log(this.name + this.age);
};

//fnb函数用fna()作用域来执行，也可以call更换成apply，不过参数须改成一个数组变量
var fnaobj = new fna();
fnb.apply(fnaobj);  //output: tom25
