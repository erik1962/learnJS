let querystring = require("querystring");
let fs = require("fs");

function start(response) {
    console.log(`Request handler "start" was called.`);

    let body = '<html>' +
        '<head>' +
        '<meta http-equiv="content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';

        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(body);
        response.end();
}

function show(response) {
    console.log('Request handler "show" was called.');
    response.writeHead(200, {"Content-Type": "image/png"});
    fs.createReadStream("./tmp/English.png").pipe(response);
}

function upload(response, postData) {
    console.log(`Request handler "upload" was called.`);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(`You've sent:\n ${querystring.parse(postData).text}`);
    response.end();
}

exports.start = start;
exports.show = show;
exports.upload = upload;