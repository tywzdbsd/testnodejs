/**
 * Created by tyw on 15/7/28.
 */
var EventEmitter = require('events').EventEmitter;  //加载events模块，提供EventEmitter对象（核心就是事件发射与事件监听器功能的封装）
var event = new EventEmitter(); //创建事件监听器的一个对象
event.on('some_event',function(){   //event对象注册了事件some_event的一个监听器
    console.log('some_event occured!');
});
var time = setTimeout(function () {
    event.emit('some_event');   //向event对象发送事件
},1000);