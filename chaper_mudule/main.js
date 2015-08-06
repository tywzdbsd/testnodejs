/**
 * Created by tyw on 15/7/28.
 */
var hello =require('./hello'); //引入本目录下hello.js文件，require用于从外部获取一个模块的接口，即获取模块的exports对象
hello = new hello();
hello.setName('BYVoid');
hello.sayHello();

//hello.ff();
//hello.start();
//hello.start();

function Person(name,sex)
{
    this.name = name;
    this.sex = sex;
    //return 1;
    //return true;
    //return "aty";
    return {"returnValue":11};
}

//new关键字会被认为是创建对象
var aObj = new Person("11",1);
console.log(aObj.returnValue);//11
console.log(aObj.name);//undefined