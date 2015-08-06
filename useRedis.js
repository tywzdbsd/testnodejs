/**
 * Created by tyw on 15/8/4.
 */
var redisConnect = require('./chapter_redis/redisConncet.js');
var host_path= '127.0.0.1';
var host_port =6379;
var selectDbNumber = 0;
var auth = 'vkhim';
redisConnect.connOpen(host_path,host_port,selectDbNumber,auth);
////add
//redisConnect.userAddOrUpdate('access_token1','tom','22');
//redisConnect.userAddOrUpdate('access_token2','jerry','20');
//redisConnect.userAddOrUpdate('access_token3','jack','20');
////update
//redisConnect.userAddOrUpdate('access_token1','peter','22');
////delete
//redisConnect.delUser('access_token3');
////search
////if x exists,output 1，otherwise,output 0
//redisConnect.exists('access_token3',function(err,value){
//    console.log(value);
//});
//redisConnect.getUser("access_token1",function (err,value) {
//    if (err) {
//        console.log(err);
//    }
//    console.log(JSON.parse(value).name);
//});
//redisConnect.getAllUser(function(a){
//    console.log(a);
//});

var jsonstr = "{'id':'1','name':'jack'}";//"{'id':'1','name':'jack'}"
//console.log(jsonstr);
//var jsonobj = JSON.parse(jsonstr);
//console.log(jsonobj.name);

//add
//redisConnect.setAKindOfCache({
//    access_token:"token1",
//    kind:'kind2',
//    cache:'cache2'
//},function(data){
//    console.log(data);
//});



//del
//redisConnect.delAKindOfCache({
//    access_token:"token1",
//    kind:'kind1'
//},function(data){
//    console.log(data);
//})

//find all somesonekind‘s data
//redisConnect.findAllKindOfCache({access_token:"token1"}, function (data) {
//    console.log(data.kind2);
//});

//findCacheBykind
redisConnect.findCacheBykind({access_token:"token1",kind:"kind2"}, function (data) {
    console.log(data);
});