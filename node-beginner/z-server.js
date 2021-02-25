var http = require("http");
var url = require("url");

function start(route, handle) {

    console.log(handle);

    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log(`request.url: ${request.url} received.`);
        console.log(`parsed pathname: ${pathname} received.`);
        let content = route(handle, pathname, response);
    }
        
    http.createServer(onRequest).listen(8888);
    console.log("Server is running...");
}

exports.start = start;