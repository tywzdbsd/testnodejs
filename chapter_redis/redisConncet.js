/**
 * Created by tyw on 15/8/4.
 */
module.exports = function () {
    var redis = require('redis');
    var client;
    return {
        /*
         * param:
         * host_path:string,redis所在ip；
         * host_port：int,端口；
         * selectDbNumber：int,数据库序号；
         * auth:string,数据库验证
         * */
        connOpen: function (host_path, host_port, selectDbNumber, auth) {
            client = redis.createClient(host_port, host_path);
            client.select(selectDbNumber);//选择第0号数据库，默认0号
            client.auth(auth, function () {//验证用户
                console.log('成功验证');
            });
            client.on('end', function (err) {//监听数据库结束事件
                console.log('数据库结束!');
            });
            client.on('connect', function (err) {
                console.log('数据库连接中!');
            });
        },
        connClose: function () {
            if (client) {
                client.quit();
            }
        },
        //a,d,u,f
        setAKindOfCache: function (params, callback) {
            client.hset(params.access_token, params.kind, params.cache, function (err, data) {
                callback(data);
            });
        },
        delAKindOfCache: function (params, callback) {
            client.hdel(params.access_token, params.kind, function (err, data) {
                callback(data);
            });
        },
        updateAKindOfCache: function (params, callback) {
            client.hset(params.access_token, params.kind, params.cache, function (err, data) {
                callback(data);
            });
        },
        findAllKindOfCache: function (params, callback) {
            client.hgetall(params.access_token, function (err, data) {
                callback(data);
            });
        },
        findCacheBykind: function (params, callback) {
            client.hget(params.access_token, params.kind, function (err, data) {
                callback(data);
            });
        }
        //login set cache

    }
}();