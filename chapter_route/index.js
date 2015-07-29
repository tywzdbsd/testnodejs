/**
 * Created by tyw on 15/7/29.
 */
var server = require("./server");
var router = require("./router");

server.start(router.route);