/**
 * Created by tyw on 15/7/28.
 */
var http = require("http");
var url = require("url");   //创建url模块
var querystring = require("querystring");

function start(){
    function onRequest(request,response){
        var urlpath = url.parse(request.url);   //urlpath获取了整个url
        var pathname = urlpath.pathname;        //获取pathname
        var urlparams = urlpath.query;     //获取url中的参数表
        var params = querystring.parse(urlparams, '&', '=')  //反序列化
        var intInfo = parseInt(params["info"]); //获得info
        var intParam = parseInt(params["param"]);   //获得param
        var sum = intInfo + intParam;

        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("b+c="+sum);
        response.end();
    }
    http.createServer(onRequest).listen(80);
    console.log("server has started at http://127.0.0.1?info=22&param=33");
}
exports.start = start;
start();
//需要在命令行本目录下输入：sudo node question3.js才能监听80端口
