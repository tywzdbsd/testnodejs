/**
 * Created by tyw on 15/7/29.
 */
var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req,res){
    var post = '';  //暂存请求体信息
    req.on('data',function(chunk){  //建立req对象的data事件（接入中）的监听器，每当接受到请求体数据，累加到post里
        post += chunk
    });
    req.on('end',function(){    //建立req对象的end事件（接受完成）的监听器，每当完成请求发送，用去二院string将post解析为真正的post请求格式，然后向客户端返回。
        post = querystring.parse(post);
        console.log("name:"+post['name']);
        console.log("pwd:"+post['pwd']);
        res.end(util.inspect(post));
    });
}).listen(3004);

console.log("server started at http://127.0.0.1:3004");
