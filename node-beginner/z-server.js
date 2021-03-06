var http = require("http");
var url = require("url");

function start(route, handle) {

    function onRequest(request, response) {
        let postData = "";
        let pathname = url.parse(request.url).pathname;
        console.log(`request.url: ${request.url} received.`);
        console.log(`parsed pathname: ${pathname} received.`);

        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log(`Received POST data chunk ${postDataChunk}.`);
        });
        
        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    }
        
    http.createServer(onRequest).listen(8888);
    console.log("Server is running...");
}

exports.start = start;