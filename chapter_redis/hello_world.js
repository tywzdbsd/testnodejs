/**
 * Created by tyw on 15/7/31.
 */
var  redis = require('redis');//载入redis包
var client = redis.createClient(6379,'127.0.0.1');
//var client = redis.createClient();//可以不需要填写数据库连接域和端口，默认为6379,127.0.0.1
//var client = redis.createClient(6379,'127.0.0.1',{auth_pass:'123'});//连接数据库，对设置过权限的数据库,方法一：123为客户端密码

//client.auth('123',function(){//连接数据库，要连设置过权限的数据库,方法一：123为客户端密码
//    console.log('成功验证');
//});
client.auth('123',function(){//连接数据库，要连设置过权限的数据库，方法二：123为客户端密码
    console.log('成功验证');
});

client.on('ready',function(err){//监听就绪事件，客户端就绪就输出run ready
    console.log("server have ready  ");
});

