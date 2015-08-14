/*
    Redis 数据库缓存模块
 */
module.exports = function() {
    var redis = require ('redis');
    var connections = {};
    var port = 6379;
    var host = '127.0.0.1';
    var options = {auth_pass:'vkhim'};

    return {
        init: function(callback) {
            var db = redis.createClient(port,host,options);

            db.on('connect', function(){
                connections['vkhim'] = db;
                callback();
            });

            db.on('error', function(err){
                connections['vkhim'] = null;
                callback(err);
            });
        },

        getDb: function(alias) {
            var db = connections[alias];
            if(!db) {
                return null;
            } else {
                return db;
            }
        }
    };
}();