/**
 * Created by tyw on 15/7/29.
 */
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function (req, res) {
    res.writeHead(200, {'ContentType': 'text/plain'});
    res.end(util.inspect(
            url.parse(req.url, true)
        )
    );
}).listen(3002);

console.log("server started at http://127.0.0.1:3002");
//访问http://localhost:3000/user?name=w3c&email=w3c@w3cschool.cc