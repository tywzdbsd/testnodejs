/**
 * Created by tyw on 15/7/31.
 */
var redis = require('redis');
var client = redis.createClient(6379,'127.0.0.1');

client.auth('123',function(){
    console.log('成功验证！');
});

client.on('ready',function(){
    console.log('数据库准备就绪！');
});

client.on('connect',function(err,list){
    client.set('video','this is Tokyo North Red Wind',redis.print);
    client.get('video',redis.print);
    client.quit();
});
