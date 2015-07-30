/**
 * Created by tyw on 15/7/30.
 */
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
numCPUs = 1;
if (cluster.isMaster) {
    //声明工作进程数组
    var workers = [];
    //创建工作进程,这里绑定了消息事件，返回工作进程
    function newWorker() {
        var worker = cluster.fork();
        //监听信息，如果type为broadcast的话，则确定为广播
        worker.on('message', function (msg) {
            console.log(msg.event.message);
            //if (msg.type = 'bro adcast') {
            //    var event = msg.event;
            //    //向所有worker发送此条广播
            //    //workers.forEach(function(workerx){
            //    //    workerx.send(event);
            //    //});
            //    //向所有第一个worker发送此条广播
            //    workers[0].send(event);
            //};
        });
        return worker;
    };
    for(var i=0;i<numCPUs;i++){
        workers.push(newWorker());
    }
    //cluster.on('online',function(worker){
    //    console.log('worker %d is online',worker.id);
    //});
}else{
    var worker = cluster.worker;
    //console.log('in %d process',worker.process.pid);
    //广播就是发送一个type为broadcase的信息，event就是广播内容
    worker.broadcast = function(event){
        worker.send({
            type:'broadcast',
            event:event
        });
    };
    //worker.on可以换成process.on，监听master和worker的message事件，用来接受信息
    worker.on('message',function(event){
        console.log('worker:'+worker.id+' recived event from ',event.workerId);//什么进程收到从哪个进程发送的信息
    });
    worker.broadcast({
        message:'online',
        workerId:worker.id
    });
}
//进程之间数据不共享：
//进程之间不能共享数据，所有数据交换只能通过进程之间的通信来交换。
//交换的数据格式要求：
//都是可序列化的，所以函数、文件描述符和HttpReponse之类的东西不能传递
//使用cluster需在程序设计时考虑数据交换问题，参考做法：
//将类似session这些数据放在redis里，每个进程做好存取工作，所有的数据都不放在node内存里