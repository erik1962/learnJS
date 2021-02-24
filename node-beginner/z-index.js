var server = require("./server.js");
var router = require("./z-router.js");

server.start(router.route);