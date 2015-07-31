/**
 * Created by tyw on 15/7/31.
 */
var redis = require ('redis');
var port = 6379;
var host = '127.0.0.1';
var options = {auth_pass:'vkhim'};
var client = redis.createClient(port,host,options);

function GetRandomNum(Min,Max)
{
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}

var session = GetRandomNum(0,100000000);//定义有100000000个用户
console.log('当前的用户的session值: '+session);//获取随机的session值

client.on('connect',function(){
    client.hmset(session,{uid:'xxxxx'}); //将session和session对应的用户id值存入缓存
    client.expire(session,3600);//设置session存在时间为3600秒
    client.hget(session,'uid',function(err,value){
        console.log('当前session里的用户id: '+value);
    });//获得用户id值
    //client.quit();
    console.log('tywxyzvv');
});

client.on('end',function(){
    console.log('断开缓存')
});