var http = require('http');
 
var userCount = 0;
http.createServer(function (req, res) {
  console.log("new connection");
  userCount++;
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello!\n');
  res.write('We have had '+userCount+' visits!\n');
  res.end();
}).listen(8080);
 
console.log('Server running on port 8080.');
