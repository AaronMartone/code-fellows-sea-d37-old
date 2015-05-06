'use strict'

var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.write('Welcome');
    res.end();
}).listen(3000);

console.log('Server listening on port 3000...');