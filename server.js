/**
 * Created by tyw on 15/7/27.
 */
var http = require('http');

var client = http.createServer(function (request,response){
    var html = '<html>　'
        +'<head>　'
        +'<title>nodejs</title>'
        +'</head>'
        +'<body>　'
        +　 '<p style="color:#65ffec;background-color: #999999;">hello world! 1234</p>'
        +'</body>　'
        +'</html>';
    response.writeHead(200,{'Contend-Type':'text/plain'});
    response.write(html);
    response.end('<p style="color:#999999;background-color: #65ffec;">Hello World<p>');
});
client.listen(8888);
console.log('Server runing at http://127.0.0.1:8888/');
