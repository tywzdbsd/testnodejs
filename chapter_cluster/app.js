/**
 * Created by tyw on 15/7/29.
 */
var cluster = require('cluster');   //引入cluster模块
var http = require('http'); //引入http模块
var numCPUs = require('os').cpus().length;  //获取核数

if (cluster.isMaster) {//有总控节点
    console.log("master start...");

    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('listening',function(worker,address){
        console.log('listening: worker ' + worker.process.pid +', Address: '+address.address+":"+address.port);
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(8000);
}