/**
 * Created by tyw on 15/7/29.
 */
var http = require('http');
var url = require('url');
var util = require('util');

function getType(o) {
    var _t; return ((_t = typeof(o)) == "object" ? o==null && "null" || Object.prototype.toString.call(o).slice(8,-1):_t).toLowerCase();
}

http.createServer(function (req, res) {
    res.writeHead(200, {'ContentType': 'text/plain'});
    //测试，req.url为去掉ip/域名的地址字符串、url.parse()把地址字符串转换成对象、util.inspect()把对象转换成字符串;
    console.log("req.url:"+req.url+" type="+getType(req.url));
    console.log("url.parse(req.url, true):"+url.parse(req.url, true)+" type="+getType(url.parse(req.url, true)));
    console.log("util.inspect(url.parse(req.url, true)):"+util.inspect(url.parse(req.url, true))+" type="+getType(util.inspect(url.parse(req.url, true))));
    res.end(util.inspect(
            url.parse(req.url, true)    //一个URL字符串转换成对象
        )
    );
}).listen(3002);

console.log("server started at http://127.0.0.1:3002");
//访问http://localhost:3002/user?name=w3c&email=w3c@w3cschool.cc

