/**
 * Created by tyw on 15/7/28.
 */
var hello = require('./hello'); //引入本目录下hello.js文件，require用于从外部获取一个模块的接口，即获取模块的exports对象
//hello.world();
hello = new hello();
hello.setName('BYVoid');
hello.sayHello();