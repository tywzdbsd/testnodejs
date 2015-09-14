/**
 * Created by tyw on 15/8/24.
 */
//它代表函数运行时，自动生成的一个内部对象，只能在函数内部使用。比如，
//    function test(){
//        this.x = 1;
//    }
//this指的是，调用函数的那个对象。不同情况，this的值会发生变化

//this四种用法
//1 纯粹的函数调用 全局性调用，this就代表Global
//function test() {
//    this.x = 1;
//    console.log(this.x);
//}
//test();


//2
//3
//4
//var fn = function () {
//    this.test = function () {
//        console.log('this is test function');
//    }
//};

//this中建的test对象的调用：实例化对象fn，然后调用对象作用域中的对象方法test
//(new fn()).test();

