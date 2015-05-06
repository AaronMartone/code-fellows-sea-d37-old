'use strict';

var http = require('http');

var routes = {
    'GET': {},
    'POST': {},
    'PUT': {},
    'PATCH': {},
    'DELETE': {}
};

routes['GET']['/hello'] = function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.write(JSON.stringify({ msg: 'hello world' }));
    res.end();
};

routes['four_oh_four'] = function(req, res) {
    res.writeHead(404, {
        'Content-Type': 'application/json'
    });

    res.write('{"msg":"page not found"}');
    res.end();
}

var server = http.createServer(function(req, res) {
    if (routes[req.method][req.url] === 'function') {
        routes[req.method][req.url](req, res);
    } else {
        routes['four_oh_four'](req, res);
    }
}).listen(3000);