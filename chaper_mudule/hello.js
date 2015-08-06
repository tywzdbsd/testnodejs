/**
 * Created by tyw on 15/7/28.
 */
//exports.world = function () { //通过export对象吧world作为模块的访问接口，模块，然后通过mian.js中exports对象的成员函数了。
//    console.log('Hello World');
//}

function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    };
    this.sayHello = function () {
        console.log("Hello" + name);
    };


    function ff() {
        console.log("func");
    };

    //return {
    //    start: function () {
    //        console.log("start function");
    //    }
    //}
};

function test() {
    console.log("output test ")
}

var user = {
    name: 'jack',
    age: '25',
    like: 'sport',
    func: function () {
        console.log('func in user');
    }
};

module.exports = Hello; //接口用module.exports= Hello (Hello为方法)代替了 exports.world = function(){}。在外部引用时，接口对象就是要输出Hello对象本身，而不是原来的exports