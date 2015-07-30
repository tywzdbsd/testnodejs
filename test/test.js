var cluster = require('cluster');
var cluster = require('cluster');   //引入http模块
var http = require('http'); //获取核数
var numCPUs = require('os').cpus().length;
if (cluster.isMaster) {//主程序运行时cluster.isMaster会被设置为true
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    cluster.on('online',function(worker){     //监听worker创建成功事件
        console.log('online: worker ' + worker.process.pid );
    });
} else {    //每个子进程被创建之后，都会监听8000端口不回引起冲突，这就是cluster共享端口的功能了
    http.createServer(function (req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(8000);
};