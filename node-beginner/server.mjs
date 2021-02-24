import * as http from "http";
import * as url from "url";
import { router } from "./router.mjs";

function start() {
    function onRequest(request, response) {
        console.log(`Request for ${request.url} received`);
        console.log("\n");
        console.log(request.headers);
        console.log(request.httpVersion);
        console.log(request.method);
        console.log(request.rawHeaders);
        console.log(request.rawTrailers);
        console.log(request.url);
        console.log(request.trailers);
        console.log(request.rawTrailers);
        router(request.url);
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
        }

    http.createServer(onRequest).listen(8888);
    console.log("Server is running...");
}

export { start };