var http = require('http')

http.createServer(function (request, result) {
    result.writeHead(200, {'Content-Type': 'text/plain'});
    result.end('Hello World\n');
}).listen(8080)

console.log('Server running on port 8080. ');
