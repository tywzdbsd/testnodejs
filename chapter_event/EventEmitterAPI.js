/**
 * Created by tyw on 15/7/28.
 * EventEmitter常用的API
 */
var events = require('events');
var emitter = new events.EventEmitter();    //1 建立事件对象
//Q1 .on() addListener()一样的验证
emitter.on("yzEvent", function (arg1, arg2) {   //2 建监听器(二个yzEvent)
    console.log('yzEvent1', arg1, arg2);
});
emitter.addListener("yzEvent", function (arg1, arg2) {
    console.log('yzEvent2', arg1, arg2);
});
//Q2emit()触发一个事件
emitter.emit('yzEvent', 'jack', 1992);  //3 触发事件，如用on()建监听器，触发'someEvent'事件两次，执行两次
emitter.emit('yzEvent', 'jack', 1992);

//Q3 .once()只能触发一次的验证的验证
emitter.once('onceEvent', function (arg1, arg2) {
    console.log('do onceEvent', arg1, arg2);
});
emitter.emit('onceEvent', 'tom', 1990);   //如用once()建监听器，触发'onceEvent'事件二次，只执行一次
emitter.emit('onceEvent', 'tom', 1990);

//Q4 removeListener()移除指定事件的某个监听器的验证
//写回调函数
var callback = function (stream) {
    console.log('someone connected!' + stream);
};
emitter.on('connectionEvent', callback);  //设置某事件监听器，调用回调函数
emitter.emit('connectionEvent', 'a stream');  //触发事件
emitter.removeListener('connectionEvent', callback); //移除指定事件的某个监听器，linstener必须是该事件已经注册过的监听器
emitter.emit('connectionEvent', 'a stream');  //触发事件

//Q5 移除所有事件的所有监听器验证、移除一个事件的所有监听器验证
emitter.removeAllListeners();  //移除yzEvent事件的监听器，后面再触发yzEvent失败
emitter.emit('yzEvent', 'jack', 1992);

//emitter.emit('error');