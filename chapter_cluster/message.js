/**
 * Created by tyw on 15/7/30.
 * cluster of master and worker post message eachother
 * some event
 */
var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
numCPUs = 4;

if (cluster.isMaster) {
    console.log('[master] ' + "start master...");

    for (var i = 0; i < numCPUs; i++) {
        var wk = cluster.fork();
        console.log("[master] before hi ");
        wk.send('[master] ' + '--> worker' + wk.id);
    }

    cluster.on('fork', function (worker) {
        console.log('[master] ' + 'fork: worker' + worker.id);
    });

    cluster.on('online', function (worker) {
        console.log('[master] ' + 'online: worker' + worker.id);
    });

    cluster.on('listening', function (worker, address) {
        console.log('[master] ' + 'listening: worker' + worker.id + ',pid:' + worker.process.pid + ', Address:' + address.address + ":" + address.port);
    });

    cluster.on('disconnect', function (worker) {
        console.log('[master] ' + 'disconnect: worker' + worker.id);
    });

    cluster.on('exit', function (worker, code, signal) {
        console.log('[master] ' + 'exit worker' + worker.id + ' died');
    });

    function eachWorker(callback) {
        for (var id in cluster.workers) {
            callback(cluster.workers[id]);
        }
    }

    setTimeout(function () {
        eachWorker(function (worker) {
            worker.send('【settimeout】 [master] ' + 'send message --> worker' + worker.id);
        });
    }, 3000);

    Object.keys(cluster.workers).forEach(function(id) {
        cluster.workers[id].on('message', function(msg){
            console.log('[master] ' + 'message ' + msg);
        });
    });

} else if (cluster.isWorker) {
    console.log('[worker] ' + "start worker ..." + cluster.worker.id);

    process.on('message', function(msg) {
        console.log('[worker] '+msg);
        process.send('[worker] worker'+cluster.worker.id+' -->[master] received!');
    });

    http.createServer(function (req, res) {
        res.writeHead(200, {"content-type": "text/html"});
        res.end('worker'+cluster.worker.id+',PID:'+process.pid);
    }).listen(3000);

}

