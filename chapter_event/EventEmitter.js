/**
 * Created by tyw on 15/7/28.
 */
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('yzEvent', function(arg1, arg2) {    //同一个事件注册两个监听器
    console.log('listener1', arg1, arg2);
});
emitter.on('yzEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});

emitter.emit('yzEvent', 'jack', 1992);  //发射事件'someEvent'