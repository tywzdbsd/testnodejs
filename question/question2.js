/**
 * Created by tyw on 15/7/28.
 */
var http = require("http");
function start(){
    function onRequest(request,response){
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("OK");
        response.end("");
    }
    http.createServer(onRequest).listen(8888);
    console.log("server has started at http://127.0.0.1:8888");
}
exports.start = start;
start();