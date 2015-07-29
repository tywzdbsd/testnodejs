/**
 * Created by tyw on 15/7/28.
 */
var http = require("http");
var url = require("url");   //创建url模块
var querystring = require("querystring");

function start() {
    function onRequest(request, response) {
        var html = '<html>　'
            + '<head>　'
            + '<title>nodejs</title>'
            + '</head>'
            + '<body>　'
            + '<button>第1条记录</button>'
            + '<button>第2条记录</button>'
            + '<button>第3条记录</button>'
            + '<button>第4条记录</button>'
            + '<button>第5条记录</button>'
            + '<button>第6条记录</button>'
            + '</body>　'
            + '</html>'
            + '<script type="text/javascript">'
            +'    var buttonst_obj = document.getElementsByTagName("button");'
            +'    console.log(buttonst_obj[0]);'
            +'    for (var i = 0; i < buttonst_obj.length; i++) {'
            +'        buttonst_obj[i].onclick = (function (i) {'
            +'            return function () {'
            +'                alert(i + 1);'
            +'            };'
            +'        })(i);'
            +'    }'
            +'    ;'
            +'</script>';

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("server has started at http://127.0.0.1:8888");
}
exports.start = start;
start();
