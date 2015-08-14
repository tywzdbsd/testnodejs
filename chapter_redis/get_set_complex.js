/**
 * Created by tyw on 15/7/31.
 */
var redis = require('redis');
var client = redis.createClient(6379, '127.0.0.1');
client.select(0);//选择第0号数据库，默认0号
client.auth('vkhim', function () {//验证用户
    console.log('成功验证')
})
client.on('ready', function (err) {//监听准备事件
    console.log('数据库准备就绪!')
})
client.on('end', function (err) {//监听数据库结束事件
    console.log('数据库结束!')
});
client.on('connect', function (err, data) {//监听数据库连接事件
    var name = 'tyw';
    client.hmset(name, {adventage: 'genius',age:'26',address:'hangzhou yuhang yanze company'}, redis.print);//增加，返回成功与否
    //client.hmset(name, 'disadventage', 'heavy',redis.print);
    //client.del('b',redis.print);//删除key为'b'的键值对
    //client.hdel('tyw','age','disadventage',redis.print);   //删除,可以设置多个key,返回删除的个数
    //client.hmset(name,'adventage','height');    //修改
    client.hgetall(name, function (err, res) {//读取，返回哈希表key中，一个或多个给定域的值。在回调函数中处理
        if (err) {
            console.log(err);
        }
        //res.add = 'hz';//若没有add这个key，则会添加一个add:'hz'；若有add这个key，可以修改它对应的value
        console.dir(res);
        console.log(typeof(res));
        //console.log(res.age);//res是一个json对象,即如果res={adventage:'height',age:25...},取值:res.age输出25
        
        client.hset('testexpire','user_id','12');
        client.expire('testexpire',890);
        client.ttl('testexpire',function(err,data){
            if(data){
                console.log(typeof(data));
                console.dir(data);
            }
        });
        client.hget('testexpire','user_id', function (err,user_id) {
            if(user_id){
                console.log(user_id);
            }
        });
        //client.flushall();  //服务器与数据库客户端关闭之前清理全部数据库
        //client.flushdb();   //服务器与数据库客户端关闭之前清理这号数据库
        client.quit();
        //client.end();
        

    });
    //client.keys('*',function(err,res){
    //    if (err) {
    //        console.log(err);
    //    }
    //    console.log(res);
    //
    //});
    //client.exists('tyw',redis.print);
});
//client.end();//可以放在最外面
//client.quit();放最外层会报错  Redis connection gone from close event.