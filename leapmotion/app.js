var express = require('express') //express is a Node.js web application framework
  , http = require('http') //for serving files over http
  , path = require('path') //for handling and transforming file paths
  , fs = require('fs') //for file I/O using standard POSIX functions
  , app = express();

process.on('uncaughtException', function (err) {
	 console.log(">> Uncaught exception: "+err);
});

app.use(express.static(path.join(__dirname, 'public'))); //we need to serve static files from the public directory

var port = 5000;
http.createServer(app).listen(port, function(){
  console.log('Express http server listening on port ' + port);
});

module.exports = app;
