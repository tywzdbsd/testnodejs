/**
 * Created by tyw on 15/7/28.
 */
var http = require("http"); //创建http模块
var url = require("url");   //创建url模块
var querystring = require("querystring");

function start() {
    function onRequest(request, response) {
        var urlpath = url.parse(request.url);   //urlpath获取了整个url
        var pathname = urlpath.pathname;        //获取pathname
        var urlparams = urlpath.query;     //获取url中的参数表
        var params = querystring.parse(urlparams, '&', '=')
        var name = params["name"]; //反序列化获得name
        var pwd = params["pwd"];   //反序列化获得pwd

        console.log("Request for " + pathname + " received.");
        console.log("urlparams:" + urlparams);//
        console.log("name :" + querystring.parse(url.parse(request.url).query, '&', '=')["name"]);
        console.log("pwd :" + querystring.parse(url.parse(request.url).query, '&', '=')["pwd"]);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World!!");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("server has started.");
}

exports.start = start;
start();