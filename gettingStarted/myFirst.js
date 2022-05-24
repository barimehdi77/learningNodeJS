var http = require('http');
var date = require('./myFirstModules');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The Time is : " + date.myDateTime());
  res.write("<br/>The Url path: " + req.url + "<br/>The url test: ");
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);
