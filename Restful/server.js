var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var i = 4;

var user = {
		"user4" : {
		"name" : "mounir",
		"password" : "password4",
		"profession" : "teacher",
		"id": 4
	}
};

app.get('/', function (req, res) {
	fs.readFile( __dirname + "/" + "index.html" , function (err, data) {
		res.end(data);
	});
});

app.post('/adduser', function (req, res) {
	console.log(req.body);
	var filename = __dirname + "/" + "users.json";
	// First read existing users.
	fs.readFile( filename, 'utf8', function (err, data) {
		data = JSON.parse( data );
		var user = req.body;
		user["id"] = i++;
		data["user4"] = req.body;
		console.log( data );
		filedata = data;
		fs.writeFile(filename, JSON.stringify(data), function (err) {
			if (err)
				console.log(err);
			else
				console.log("data added");
		});
		res.end(JSON.stringify(data));
	});
});

app.get('/listusers', function (req, res) {
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
		console.log(data);
		res.end(data);
	});
});



var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log("listening at http://%s:%s", "0.0.0.0", port)
});



