var server = require("./z-server.js");
var router = require("./z-router.js");
var requestHandlers = require("./z-requestHandlers.js");

let handle = [];
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);