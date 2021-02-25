var server = require("./z-server.js");
var router = require("./z-router.js");

server.start(router.route);