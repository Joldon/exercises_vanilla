const http = require('http');
const server = http.createServer(function(request, response) {
    response.writeHead(200, {"content-type": "text/plain"});
    response.end("Hello World/n");
    });
    server.listen(80);
    console.log('server running at http://127.0.0.1:80/');