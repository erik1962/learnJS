var http = require("http");
var url = require("url");

function start(route) {

    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log(`request.url: ${request.url} received.`);
        console.log(`parsed pathname: ${pathname} received.`);
        route(pathname);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }
        
    http.createServer(onRequest).listen(8888);
    console.log("Server is running...");
}

exports.start = start;