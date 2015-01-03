var nodeStatic = require('node-static');
var fileServer = new nodeStatic.Server('../static');
var moment = require('moment');
var mustache = require('mustache');
var fs = require('fs');

function get_current_time()
{
	return moment().format('hh:mm:ss a');
}

var http = require('http');
var server = http.createServer(function (request, response) {
	console.log(request.method + ' ' + request.url);
	if (request.url==='/dynamic') {
		response.setHeader("Content-Type", "text/html");	
		var template = fs.readFileSync('../templates/cur_time.html').toString();
		var body = mustache.render(template, { cur_time : get_current_time() } );
	    response.end(body);
	} else if (request.url==='/time') {
		response.setHeader("Content-Type", "text/html");
		response.end(get_current_time());
	} else {
        fileServer.serve(request, response);
    };
});

var hostname = '127.0.0.1';
var port = 8080;
server.listen(port,hostname);
console.log('Serving at ' + hostname + ':' + port);